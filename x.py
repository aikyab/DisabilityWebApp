
# Code Constructs to be shifted from Python to Java

import collections

l1 = collections.defaultdict(list)
s = "hello"

s = s[::-1] # reverse string
s = s[0:2] # substring


strs = "abc"

strs += "d"


class Superone:
    protected = 10
    def __init__(self):
        self._protected = "Hello"

class HelloWorld(Superone):
    def __init__(self):
        super().__init__()
        self.derived = "Derived"
        # self.protected = "Child"

    def func(self):
        print(self._protected)
        # print(self.__class__.derived)
        # print('hello')

obj = HelloWorld()
obj.func()



class Pizza:
    def __init__(self, ingredients):
        self.ingredients = ingredients

    def __repr__(self):
        return f'Pizza({self.ingredients!r})'

    @classmethod
    def margherita(cls):
        return cls(['mozzarella', 'tomatoes'])

    @classmethod
    def prosciutto(cls):
        return cls(['mozzarella', 'tomatoes', 'ham'])


strs = "aaba"

def recursive(strs,i,j):
    if i>=j:
        return True

    if strs[i]!=strs[j]:
        return False
    
    return recursive(strs, i+1, j-1)

print(recursive(strs,0,len(strs)-1))