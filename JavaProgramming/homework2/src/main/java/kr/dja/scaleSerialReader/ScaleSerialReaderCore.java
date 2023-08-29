package kr.dja.scaleSerialReader;



import org.apache.log4j.Logger;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class ScaleSerialReaderCore
{

	private static SerialPortManager serialPortManager;
	private static ScaleDataFactory scaleDataFactory;
	private static ISerialMessageReader serialMessageReader;
	private static final Logger log = Logger.getLogger(ScaleSerialReaderCore.class);
	public static void main(String[] args)
	{

		log.info("program start...");
		scaleDataFactory = new ScaleDataFactory();
		serialMessageReader = new SerialMessageReaderImpl(scaleDataFactory);
		serialMessageReader.attachObserver(dto -> log.info(dto.toString()));
		
		serialPortManager = new SerialPortManager(serialMessageReader);

		serialPortManager.openPort("COM1", 9600);
	}
}
