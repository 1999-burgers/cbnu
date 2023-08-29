<html lang="en">
<?php
    $addr = "localhost";
    $id = "root";
    $pw = "990507";
    $db = "smart_home";
    
    $conn = mysqli_connect($addr, $id, $pw, $db, 3306) or die("connect err");
    $sql = "select * from smart_home_tb order by TIME_DT DESC LIMIT 1";
    $result = mysqli_query($conn, $sql);
?>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMART HOME</title>
</head>

<body>
    <div id='smarthome'>SMART HOME</div>
    <div id='time'>현재시각 :
        <?php while($row = mysqli_fetch_array($result)){
            echo $row[0];?>
        <button type="button" id="button" onClick='window.location.reload()'>새로고침</button>
    </div>

    <span id = 'title'>
        <span id='temp'>온도</span>
        <span id='humid'>습도</span>
        <span id='dust'>미세먼지</span>
    </span>
    <span id = 'value'>
        <span>
            <?php echo $row[1];?>
        </span>
        <span>
            <?php echo $row[2];?>
        </span>
        <span>
            <?php echo $row[3];}?>
        </span>
    </span>

    <style>
        #smarthome{
            color:white;
            font-size: 35pt;
            font-weight: 1000;
            text-align: center;
            background-color: lightcoral;
            margin: 150px;
            margin-top: 50px;
            margin-bottom: 80px;
            padding: 30px;
            padding-left: 40px;
            padding-right: 40px;
            width: auto;
        }
        #time{
            font-size: 25pt;
            font-weight: 700;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 70px;
        }
        #button{
            width: 100px;
            height: 50px;
            font-weight: 600;
            font-size: 15pt;
            border-style: none;
            color: white;
            text-align: center;
            margin-left: 50px;
            background-color: lightcoral;
            border-radius: 10px;
        }
        #title{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 50px;
            font-size: 25pt;
            text-align: center;
            font-weight: 600;
            margin-bottom: 20px;
        }
        #value{
            display: grid;
            font-size: 25pt;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 50px;
            text-align: center;
            font-weight: 500;
        }
        #temp{
            box-sizing: content-box;
            background-color: lightcoral;
            color: white;
            border-width: auto;
            border-style: solid;
            border-radius: 10px;
        }
        #humid{
            box-sizing: content-box;
            background-color: lightcoral;
            color: white;
            border-width: auto;
            border-style: solid;
            border-radius: 10px;
        }
        #dust{
            box-sizing: content-box;
            background-color: lightcoral;
            color: white;
            border-width: auto;
            border-style: solid;
            border-radius: 10px;
        }
    </style>
</body>
</html>