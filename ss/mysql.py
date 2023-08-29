import pymysql
import threading
import time
import raspberry

def insert_data():
    # connection
    conn = pymysql.connect(host='127.0.0.1', user='root', password='990507', db='smart_home', charset='utf8')
    curs = conn.cursor()

    # insert query
    sql = "insert into smart_home.smart_home_tb(TIME_DT,TEMP_ST, HUMIDITY_ST,DUST_ST) values(%s, %s, %s, %s)"
    nowDatetime = time.strftime('%Y-%m-%d %H:%M:%S')
    print(nowDatetime)
    val = (nowDatetime, "", "", "")
    curs.execute(sql, val)
    conn.commit()
    # threading.Timer(60, insert_data). start()

insert_data()

