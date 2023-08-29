import socket

HOST = '192.168.137.122'
PORT = 8888

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((HOST, PORT))

data = s.recv(1024)
print (data.decode())
f=open('C:\hello.txt','a')
f.write(str(data))
f.close()
print('complete')    

s.close()