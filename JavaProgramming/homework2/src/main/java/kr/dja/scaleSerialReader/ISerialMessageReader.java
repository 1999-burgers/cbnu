package kr.dja.scaleSerialReader;

public interface ISerialMessageReader
{
	void readData(byte[] serialData);
	
	void attachObserver(ISerialDataObserver observer);

}
