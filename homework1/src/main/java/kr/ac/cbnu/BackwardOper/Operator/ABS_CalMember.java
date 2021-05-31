package kr.ac.cbnu.BackwardOper.Operator;

public abstract class ABS_CalMember {
	private static final String TAG = "kr.ac.cbnu.BackwardOper.Operator.REF_Oper";

	public static final ABS_CalMember getInstance(String operator) {
		Object returnObject = null;
		try {
			Class<?> taskClass = Class.forName(ABS_CalMember.classNameConverter(operator, TAG));
			returnObject = taskClass.newInstance();
		} catch (Exception e) {
			System.out.println("ERROR");
			e.printStackTrace();
			return null;
		}
		if (returnObject instanceof ABS_CalMember) {
			return (ABS_CalMember) returnObject;
		}
		return null;
	}

	public static final boolean isExist(String operator) {
		try {
			Class.forName(ABS_CalMember.classNameConverter(operator, TAG));
		} catch (Exception e) {
			return false;
		}
		return true;
	}

	private static String classNameConverter(String operator, String tag) {
		String classNameCode = new String(tag);
		for (int i = 0; i < operator.length(); ++i) {
			classNameCode += ("_" + Integer.valueOf(operator.charAt(i)));
		}
		return classNameCode;
	}
}


class REF_Oper_40 extends ABS_CalMember {
	@Override
	public String toString() {
		return "(";
	}
}

class REF_Oper_41 extends ABS_CalMember {
	@Override
	public String toString() {
		return ")";
	}
}


