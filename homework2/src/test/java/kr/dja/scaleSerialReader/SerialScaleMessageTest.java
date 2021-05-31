package kr.dja.scaleSerialReader;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class SerialScaleMessageTest
{
	private ScaleDataFactory scaleDataFactory;
	private ISerialMessageReader serialMessageReader;
	private static final Logger log = Logger.getLogger(ScaleSerialReaderCore.class);
	public SerialScaleMessageTest()
	{
		scaleDataFactory = new ScaleDataFactory();
		serialMessageReader = new SerialMessageReaderImpl(scaleDataFactory);//<==ISerialMessageReader 구현할것
		serialMessageReader.attachObserver(dto -> log.info(dto.toString()));
	}
	
	@Test
	@DisplayName("계근대 시리얼 문자열 재대로 해석")
	public void scaleMessageTest() throws InterruptedException
	{
		log.debug("test start");
		List<Object> generatedDTO = new ArrayList<>();
		serialMessageReader.attachObserver(generatedDTO::add);
		ScaleDTO dto =  new ScaleDTO();
		dto.setSequence(0);
		dto.setErrorCode("00");
		dto.setScaleStatus("00");
		dto.setIdentNo(1);
		dto.setScaleNo(1);
		dto.setGross(430);
		dto.setTare(30);
		dto.setNet(400);
		dto.setUnit("g");
		dto.setTairCode("PT");
		dto.setWeighingRange("2");
		dto.setTerminalNo("001");
		
		serialMessageReader.readData("<000002.05.0514:30___11__430.00___30.00__400.00g_PT2001___45678>\r\n".getBytes());
		for(int i = 0; i < 10000; ++i)
		{
			serialMessageReader.readData("<000002.05.0514:30___11__430.00___30.00__400.00g_PT2001___4567".getBytes());
		}
		serialMessageReader.readData("<000002.05.0514:30___11__430.00___30.00__400.00g_PT2001___45678>\r\n<000002.05.0514:30___11__430.00___30.00__400.00g_PT2001___45678>\r\n".getBytes());
		for(int i = 0; i < 1000; ++i)
		{
			serialMessageReader.readData("<000002.05.0514:30___11__430.00___30.00__400.00g_PT2001___4567".getBytes());
		}
		serialMessageReader.readData("<000002.05.0514:30___11__430.aa___30.00__400.00g_PT2001___45678>\r\n".getBytes());
		serialMessageReader.readData("<aaa>\r\n".getBytes());
		serialMessageReader.readData("<aaa\n".getBytes());
		serialMessageReader.readData("aaa>\r\n".getBytes());
		serialMessageReader.readData("aaaa<000002.05.0514:30___11__430.00___30.00".getBytes());
		serialMessageReader.readData("__400.00g_PT2001___45678>\r\naaa".getBytes());
		serialMessageReader.readData("aaa>\r\n".getBytes());
		assertEquals(generatedDTO, List.of(dto,dto,dto,dto));
		log.debug("test finish");
	}
}
