
# https://blog.naver.com/cosmosjs/220714273636

import socket

HOST = "192.168.0.21"
PORT = 9999

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((HOST,PORT))
msg = input()

s.send(msg.encode(encoding='utf-8', errors='strict'))
data = s.recv(1024)

print ('result: ' + data.decode())

s.close()