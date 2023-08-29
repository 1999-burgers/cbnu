package kr.ac.cbnu.BackwardOper.Operator;

public class NumOperand extends ABS_CalMember {
	private int value;

	public NumOperand(int v) {
		this.value = v;
	}

	public int getValue() {
		return this.value;
	}

	@Override
	public String toString() {
		return String.valueOf(this.value);
	}
}
