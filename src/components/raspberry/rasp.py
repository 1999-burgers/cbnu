import pymysql
import time
import socket
import requests


def rasp_socket():
    HOST = "192.168.0.8"
    PORT = 8080
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((HOST, PORT))

    msg = "PC: Connected"
    s.send(msg.encode(encoding='utf8'))
    temp = s.recv(1024)
    global temp_data
    temp_data = temp.decode()
    print('result:'+temp_data)

    f = open('rfid.txt', 'a')
    print('1')
    f.write(temp_data)
    f.write('hello')
    f.close()
    s.close()


rasp_socket()
