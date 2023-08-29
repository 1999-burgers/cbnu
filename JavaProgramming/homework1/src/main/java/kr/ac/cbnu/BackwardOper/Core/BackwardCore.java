package kr.ac.cbnu.BackwardOper.Core;

import java.util.Scanner;

import kr.ac.cbnu.BackwardOper.Stack.Stack;
import kr.ac.cbnu.BackwardOper.Operator.ABS_CalMember;
import kr.ac.cbnu.BackwardOper.Operator.ABS_Calculer;
import kr.ac.cbnu.BackwardOper.Operator.NumOperand;
public class BackwardCore {
	public static void main(String[] args) throws ClassNotFoundException {
		System.out.println("후위연산 계산기. 나가려면 exit를 입력하세요.");
		Scanner scanner = new Scanner(System.in);
		String input;
		while (true) {
			Stack<ABS_CalMember> value = new Stack<ABS_CalMember>(3);
			System.out.print("\n식을 입력하시오>>");
			input = scanner.nextLine();
			if (input.equals("exit"))
				break;
			try {
				postfixExp(input, value);
			} catch (Exception e) {
				e.printStackTrace();
				System.out.println("후위 표기 결과를 가져오던 중 오류가 발생하였습니다.");
				continue;
			}
			System.out.print("후위 표기 식입니다:");
			for (int i = 0; i < value.size(); i++) {
				System.out.print(" " + value.getMemberAt(i));

			}
			try {
				System.out.println("\n연산 결과입니다:  " + getValue(value));
			} catch (Exception e) {
				System.out.println("\n연산 과정중 오류가 발생하였습니다.");
			}
			System.out.println("계속하시겠습니까? (Y/N) ");
			String key = scanner.nextLine();

			if (key.equals("N"))
				break;
		}

		System.out.println("프로그램을 종료합니다.");
		scanner.close();
	}

	private static Stack<ABS_CalMember> postfixExp(String str, Stack<ABS_CalMember> calStack) {
		Stack<ABS_CalMember> tempStack = new Stack<ABS_CalMember>(calStack.getSlotSize());
		int taskInteger = 0;
		boolean numberTask = false;
		System.out.printf("%-2s | %-7s | %-30s | %-50s\n", "In", "TaskInt", "Stack", "Out");
		for (int i = 0; i < str.length(); i++) {
			char taskChar = str.charAt(i);
			if (taskChar >= '0' && taskChar <= '9') {
				if (!numberTask)
					taskInteger = 0;
				taskInteger = (taskInteger * 10) + (taskChar - '0');
				numberTask = true;
			} else if (ABS_CalMember.isExist(String.valueOf(taskChar))) {
				ABS_CalMember operator = ABS_CalMember.getInstance(String.valueOf(taskChar));
				if (numberTask) {
					calStack.pushBack(new NumOperand(taskInteger));
					numberTask = false;
				}
				if (operator.toString().equals("(")) {
					tempStack.pushBack(operator);
				} else if (operator.toString().equals(")")) {
					while (tempStack.size() >= 0) {
						if (tempStack.getBack().toString().equals("(")) {
							tempStack.popBack();
							break;
						}
						calStack.pushBack(tempStack.getBack());
						tempStack.popBack();
					}
				} else if (operator instanceof ABS_Calculer) {
					ABS_Calculer calOper = (ABS_Calculer) operator;
					while (true) {
						if (tempStack.size() == 0) {
							tempStack.pushBack(operator);
							break;
						}
						ABS_Calculer calculer = tempStack.getBack() instanceof ABS_Calculer
								? (ABS_Calculer) tempStack.getBack()
								: null;
						if (calculer == null || calculer.getPriority() < calOper.getPriority()) {
							tempStack.pushBack(calOper);
							break;
						}
						calStack.pushBack(tempStack.getBack());
						tempStack.popBack();
					}
				}
			}
			System.out.printf("%-2s | %-7s | %-30s | %-50s\n", taskChar, taskInteger, tempStack.toString(),
					calStack.toString());
		}
		if (numberTask)
			calStack.pushBack(new NumOperand(taskInteger));
		while (tempStack.size() > 0) {
			calStack.pushBack(tempStack.getBack());
			tempStack.popBack();
		}
		return calStack;
	}

	private static NumOperand getValue(Stack<ABS_CalMember> postfixStack) {
		Stack<NumOperand> tempNumStack = new Stack<NumOperand>(postfixStack.getSlotSize());
		for (int i = 0; i < postfixStack.size(); i++) {
			ABS_CalMember taskMember = postfixStack.getMemberAt(i);
			NumOperand x, y, number;
			ABS_Calculer calculer;
			if (taskMember instanceof NumOperand) {
				number = (NumOperand) taskMember;
				tempNumStack.pushBack(number);
			} else if (taskMember instanceof ABS_Calculer) {
				calculer = (ABS_Calculer) taskMember;
				x = tempNumStack.getBack();
				tempNumStack.popBack();
				y = tempNumStack.getBack();
				tempNumStack.popBack();
				tempNumStack.pushBack(calculer.task(y, x));
			}
		}
		if (tempNumStack.getMemberAt(0) == null)
			throw new NullPointerException();
		return tempNumStack.getMemberAt(0);
	}
}
