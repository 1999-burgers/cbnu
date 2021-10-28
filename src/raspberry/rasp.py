import socket

HOST = '192.168.0.8'
PORT = 8888

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((HOST, PORT))

for i in range(3):
    data = s.recv(1024)
    print(data.decode())
    data = str(data)
    print(data, "1")
    f = open('./src/raspberry/text.txt', 'a')
    f.write(data)
    print(data, "2")
    f.write("\n")
    f.close()
print('complete')
s.close()
