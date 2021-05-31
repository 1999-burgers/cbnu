package kr.dja.scaleSerialReader;


import org.apache.log4j.Logger;

import com.fazecast.jSerialComm.SerialPort;
import com.fazecast.jSerialComm.SerialPortDataListener;
import com.fazecast.jSerialComm.SerialPortEvent;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class SerialPortManager implements SerialPortDataListener
{
	private ISerialMessageReader reader;
	private SerialPort nowPort;
	private static final Logger log = Logger.getLogger(ScaleSerialReaderCore.class);
	public SerialPortManager(ISerialMessageReader reader)
	{
		this.reader = reader;
	}
	
	public SerialPort openPort(String targetName, int boudRate)
	{
		if(this.nowPort != null && this.nowPort.isOpen())
		{
			this.nowPort.closePort();
		}
		
		log.info("Using Library Version v" + SerialPort.getVersion());
		SerialPort[] ports = SerialPort.getCommPorts();
		log.info("Available Ports:");
		for (int i = 0; i < ports.length; ++i)
			log.info("   [" + i + "] " + ports[i].getSystemPortName() + ": "
					+ ports[i].getDescriptivePortName() + " - " + ports[i].getPortDescription());

		SerialPort ubxPort = SerialPort.getCommPort(targetName);

		log.info("Pre-setting RTS: " + (ubxPort.setRTS() ? "Success" : "Failure"));
		boolean openedSuccessfully = ubxPort.openPort(0);
		log.info("Opening " + ubxPort.getSystemPortName() + ": " + ubxPort.getDescriptivePortName() + " - "
				+ ubxPort.getPortDescription() + ": " + openedSuccessfully);

		ubxPort.setBaudRate(boudRate);
		ubxPort.addDataListener(this);
		this.nowPort = ubxPort;
		log.info("FINISH");
		return ubxPort;
	}

	@Override
	public int getListeningEvents()
	{
		return SerialPort.LISTENING_EVENT_DATA_AVAILABLE;
	}

	@Override
	public void serialEvent(SerialPortEvent event)
	{
		SerialPort comPort = event.getSerialPort();
		byte[] newData = new byte[comPort.bytesAvailable()];
		comPort.readBytes(newData, newData.length);
		this.reader.readData(newData);
	}
}
