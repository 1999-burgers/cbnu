package kr.ac.chungbuk._2018036023.csvParseSample;


import java.io.File;
import java.io.FileWriter;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import com.opencsv.CSVReader;
import com.opencsv.bean.CsvToBeanBuilder;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;

public class EQDataLoader
{
    private final Set<EarthQuakeData> data;

    public EQDataLoader()
    {
        this.data = new HashSet<>();
    }

    public synchronized void storeData(InputStream stream) throws Exception
    {
        InputStreamReader br = new InputStreamReader(stream, "UTF-8");
        CSVReader reader = new CSVReader(br);
        List<EarthQuakeData> beans = new CsvToBeanBuilder<EarthQuakeData>(reader).withType(EarthQuakeData.class).build()
                .parse();
        this.data.addAll(beans);
        reader.close();
    }

    public synchronized void dumpData(File file) throws Exception
    {
        if (file.isDirectory())
            throw new Exception("is directory");
        if (!file.exists())
        {
            file.createNewFile();
        }
        FileWriter writer = new FileWriter(file);
        StatefulBeanToCsv<EarthQuakeData> beanToCsv = new StatefulBeanToCsvBuilder<EarthQuakeData>(writer).build();
        beanToCsv.write(this.data.iterator());
        writer.close();
    }

    public synchronized void clearData()
    {
        this.data.clear();
    }

    public synchronized Set<EarthQuakeData> getData()
    {
        Set<EarthQuakeData> data = new HashSet<>(this.data.size());
        data.addAll(this.data);
        return this.data;
    }
}
