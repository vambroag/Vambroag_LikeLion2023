N=int(input())
Nlist=[]
Nlist=input().split()
maxnum=int(Nlist[0])
minnum=int(Nlist[0])

for i in range(0, N):
    if maxnum < int(Nlist[i]):
        maxnum = int(Nlist[i])

    if minnum > int(Nlist[i]):
        minnum = int(Nlist[i])
    i+=1

print(minnum, maxnum)