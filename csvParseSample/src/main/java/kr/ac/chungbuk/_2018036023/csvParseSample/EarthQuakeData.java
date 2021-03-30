package kr.ac.chungbuk._2018036023.csvParseSample;

import java.io.Serializable;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvDate;

@EqualsAndHashCode
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class EarthQuakeData implements Comparable<EarthQuakeData>, Serializable
{
	private static final long serialVersionUID = -1463918390087998017L;
	@CsvBindByName(column = "#진원시")
	@CsvDate("yyyy-MM-dd HH:mm:ss")
	private LocalDateTime dateTime;
	@CsvBindByName(column = "규모")
	private double magnitude;
	@CsvBindByName(column = "위도", capture = "([^ ]+) .*")
	private double latitude;
	@CsvBindByName(column = "경도", capture = "([^ ]+) .*")
	private double longitude;
	@CsvBindByName(column = "위치")
	private String description;
	
	@Override
	public int compareTo(EarthQuakeData other)
	{
		return this.dateTime.compareTo(this.dateTime);
	}
}