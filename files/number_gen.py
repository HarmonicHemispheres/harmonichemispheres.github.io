"""
simple command line script to generate TONS of numbers and symbols
on the prompt for awesome backgrounds.
"""

import random
import sys

def main():
    
    # get user input
    if len(sys.argv) is not 2:
        exit("Need amount to generate")
    
    l = int(sys.argv[1])
    choices = [i for i in range(0, 15)] + ["-", "="]
    s = ""
    # generate the output
    for i in range(l):
        s += "{}, ".format(random.choice(choices))
    
    print(s)



if __name__ == '__main__':
    main()