N=int(input())
Nlist=[]
Nlist=input().split()
v=int(input())
count=0

for i in range(0, N):
    if v == int(Nlist[i]):
        count+=1
    i+=1

print(count)