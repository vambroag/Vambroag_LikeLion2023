H, M = input("").split()
H = int(H)
M = int(M)

if H >= 0 and H <= 23 and M >= 0 and M <= 59:
    if M >= 45:
        M = M - 45
    else:
        if H == 0:
            H = 23
            M = M + 15
        else:
            H = H - 1
            M = M + 15
    print(str(H)+" "+str(M))