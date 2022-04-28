

def isPass(item):
    if item>=60:
        return True
    else:
        return False

def listToString(str_list):
    result = ""
    for s in str_list:
        result += ","+s
    return result

A = int(input("항해점수?"))
Apass = isPass(A)
B = int(input("운용점수?"))
Bpass = isPass(B)
C = int(input("어선점수?"))
Cpass = isPass(C)
D = int(input("해사법규?"))
Dpass = isPass(D)
E = int(input("해사영어?"))
Epass = isPass(E)

arr = []
if Apass and Bpass and Cpass and Dpass and Epass:
    print("모두 60점이상 합격 입니다")
else:
    if Apass:
        arr.append("항해")
    if Bpass:
        arr.append("운용")
    if Cpass:
        arr.append("어선")
    if Dpass:
        arr.append("해법")
    if Epass:
        arr.append("해영")

avr = (A+B+C+D+E)/5
arr_s =listToString(arr)
print("평균 %d점%s 과목 합격 입니다" %(avr ,arr_s))