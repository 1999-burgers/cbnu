package kr.ac.cbnu.BackwardOper.Stack;

public final class Stack<T> {
	private final int slotSize;
	private final int fullSize;
	private StackLinkSlot<T> lastSlot;

	public Stack() {
		this(10);
	}

	public Stack(int slotSize) {
		this(slotSize, -1);
	}

	public Stack(int slotSize, int fullSize) {
		this.slotSize = slotSize;
		this.fullSize = fullSize;
		this.lastSlot = new StackLinkSlot<T>(slotSize, null);
	}

	public void pushBack(T member) {
		if (this.fullSize != -1 && this.size() > this.fullSize) {
			throw new StackOverflowError();
		}
		if (this.lastSlot.isFull()) {
			this.lastSlot = this.lastSlot.createBackSlot();
		}
		this.lastSlot.push(member);
	}

	public T getBack() {
		return this.lastSlot.getBack();
	}

	public void popBack() {
		if (this.lastSlot.getFrontSlot() == null && this.lastSlot.isEmpty()) {
			throw new StackOverflowError();
		}
		this.lastSlot.popBack();
		if (this.lastSlot.getFrontSlot() != null && this.lastSlot.isEmpty()) {
			this.lastSlot = this.lastSlot.getFrontSlot();
			this.lastSlot.deleteBackSlot();
		}
	}

	public T getMemberAt(int index) {
		StackLinkSlot<T> taskSlot = this.lastSlot;
		if (this.size() - index <= 0 || index < 0) {
			throw new IndexOutOfBoundsException();
		}
		int deeps = (this.size() - 1) / this.slotSize;
		int floorDownCount = (deeps + 1) * this.slotSize - 1 - index;
		int inSlotIndex = (this.slotSize - (floorDownCount % this.slotSize) - 1);
		for (int i = floorDownCount / this.slotSize; i > 0; --i) {
			taskSlot = taskSlot.getFrontSlot();
		}
		return taskSlot.getMember(inSlotIndex);
	}

	public int size() {
		int count = -1;
		StackLinkSlot<T> taskSlot = this.lastSlot;
		do {
			taskSlot = taskSlot.getFrontSlot();
			++count;
		} while (taskSlot != null);
		return count * this.slotSize + this.lastSlot.getSize();
	}

	public int getFullSize() {
		return this.fullSize;
	}

	public int getSlotSize() {
		return this.slotSize;
	}

	@Override
	public String toString() {
		String returnString = "";
		for (int i = 0; i < this.size(); i++) {
			returnString += this.getMemberAt(i).toString() + " ";
		}
		return returnString;
	}
}


final class StackLinkSlot<T> {
	private Object[] members;
	private final int memberArrSize;
	private int stackHeight = 0;
	private StackLinkSlot<T> frontSlot = null, backSlot = null;

	public StackLinkSlot(int size, StackLinkSlot<T> frontSlot) {
		this.members = new Object[size];
		this.memberArrSize = size;
		this.frontSlot = frontSlot;
	}

	public StackLinkSlot<T> getFrontSlot() {
		return this.frontSlot;
	}

	public StackLinkSlot<T> createBackSlot() {
		this.backSlot = new StackLinkSlot<T>(this.memberArrSize, this);
		return this.backSlot;
	}

	public void deleteBackSlot() {
		this.backSlot = null;
	}

	public boolean isFull() {
		return stackHeight >= memberArrSize;
	}

	public boolean isEmpty() {
		return this.stackHeight <= 0;
	}

	public int getSize() {
		return this.stackHeight;
	}

	public void push(T member) {
		if (member == null)
			System.out.println("ERR NULL");
		this.members[this.stackHeight] = member;
		++this.stackHeight;
	}

	@SuppressWarnings("unchecked")
	public T getBack() {
		return (T) this.members[this.stackHeight - 1];
	}

	@SuppressWarnings("unchecked")
	public T getMember(int index) {
		return (T) this.members[index];
	}

	public void popBack() {
		--this.stackHeight;
	}
}