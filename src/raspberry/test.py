import os
print(os.getcwd())
f = open('./src/raspberry/text.txt', 'a')
f.write("bk")
print('1')
f.write("\n")
print('2')
f.close()
print('3')
