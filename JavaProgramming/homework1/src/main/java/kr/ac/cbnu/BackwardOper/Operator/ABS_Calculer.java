package kr.ac.cbnu.BackwardOper.Operator;

public abstract class ABS_Calculer extends ABS_CalMember {
	public abstract int getPriority();

	public abstract NumOperand task(NumOperand num1, NumOperand num2);
}

class REF_Oper_43 extends ABS_Calculer {
	@Override
	public int getPriority() {
		return 0;
	}

	@Override
	public NumOperand task(NumOperand num1, NumOperand num2) {
		return new NumOperand(num1.getValue() + num2.getValue());
	}

	@Override
	public String toString() {
		return "+";
	}
}

class REF_Oper_45 extends ABS_Calculer {
	@Override
	public int getPriority() {
		return 0;
	}

	@Override
	public NumOperand task(NumOperand num1, NumOperand num2) {
		return new NumOperand(num1.getValue() - num2.getValue());
	}

	@Override
	public String toString() {
		return "-";
	}
}

class REF_Oper_42 extends ABS_Calculer {
	@Override
	public int getPriority() {
		return 1;
	}

	@Override
	public NumOperand task(NumOperand num1, NumOperand num2) {
		return new NumOperand(num1.getValue() * num2.getValue());
	}

	@Override
	public String toString() {
		return "*";
	}
}

class REF_Oper_47 extends ABS_Calculer {
	@Override
	public int getPriority() {
		return 1;
	}

	@Override
	public NumOperand task(NumOperand num1, NumOperand num2) {
		return new NumOperand(num1.getValue() / num2.getValue());
	}

	@Override
	public String toString() {
		return "/";
	}
}

class REF_Oper_37 extends ABS_Calculer {
	@Override
	public int getPriority() {
		return 1;
	}

	@Override
	public NumOperand task(NumOperand num1, NumOperand num2) {
		return new NumOperand(num1.getValue() % num2.getValue());
	}

	@Override
	public String toString() {
		return "%";
	}
}