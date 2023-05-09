a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)

if a > b:
    if c > b:
        print(b)
    elif c < b:
        print(c)
    else:
        print(b)
elif a < b:
    if c > a:
        print(a)
    elif c < a:
        print(c)
    else:
        print(a)
else:
    if c < a:
        print(c)
    elif c > a:
        print(a)
    else:
        print(c)