import threading
import os
import pathlib
import subprocess

def print_cube(num):
    # function to print cube of given num
    print("Cube: {}" .format(num * num * num))
    print(f"Thread2 name - {threading.current_thread().name}, PID - {os.getpid()}")
 
def print_square(num):
    # function to print square of given num
    print("Square: {}" .format(num * num))
    print(f"Thread1 name - {threading.current_thread().name}, PID - {os.getpid()}")
 
if __name__ =="__main__":
    # os.chdir("/Users/aikyab/")
    # print(os.getcwd())
    p = pathlib.Path(os.getcwd()) 

    print(subprocess.run("ls -lrtF", shell=True, stdout=subprocess.PIPE).stdout.read())

    # # creating thread
    # t1 = threading.Thread(target=print_square, args=(10,))
    # t2 = threading.Thread(target=print_cube, args=(10,))
 
    # # starting thread 1
    # t1.start()
    # # starting thread 2
    # t2.start()
 
    # # wait until thread 1 is completely executed
    # t1.join()
    # # wait until thread 2 is completely executed
    # t2.join()
 
    # # both threads completely executed
    # print("Done!")