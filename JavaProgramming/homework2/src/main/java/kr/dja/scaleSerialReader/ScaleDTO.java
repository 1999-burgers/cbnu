package kr.dja.scaleSerialReader;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 저울 DTO
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ScaleDTO
{
	private long sequence;
	
	private String errorCode;
	
	private String scaleStatus;
	
	private int identNo;
	
	private int scaleNo;
	
	private double gross;
	
	private double tare;
	
	private double net;
	
	private String unit;
	
	private String tairCode;
	
	private String weighingRange;
	
	private String terminalNo;

	public long getSequence() {
		return sequence;
	}

	public void setSequence(long sequence) {
		this.sequence = sequence;
	}

	public String getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(String errorCode) {
		this.errorCode = errorCode;
	}

	public String getScaleStatus() {
		return scaleStatus;
	}

	public void setScaleStatus(String scaleStatus) {
		this.scaleStatus = scaleStatus;
	}

	public int getIdentNo() {
		return identNo;
	}

	public void setIdentNo(int identNo) {
		this.identNo = identNo;
	}

	public int getScaleNo() {
		return scaleNo;
	}

	public void setScaleNo(int scaleNo) {
		this.scaleNo = scaleNo;
	}

	public double getGross() {
		return gross;
	}

	public void setGross(double gross) {
		this.gross = gross;
	}

	public double getTare() {
		return tare;
	}

	public void setTare(double tare) {
		this.tare = tare;
	}

	public double getNet() {
		return net;
	}

	public void setNet(double net) {
		this.net = net;
	}

	public String getUnit() {
		return unit;
	}

	public void setUnit(String unit) {
		this.unit = unit;
	}

	public String getTairCode() {
		return tairCode;
	}

	public void setTairCode(String tairCode) {
		this.tairCode = tairCode;
	}

	public String getWeighingRange() {
		return weighingRange;
	}

	public void setWeighingRange(String weighingRange) {
		this.weighingRange = weighingRange;
	}

	public String getTerminalNo() {
		return terminalNo;
	}

	public void setTerminalNo(String terminalNo) {
		this.terminalNo = terminalNo;
	}
	
}
