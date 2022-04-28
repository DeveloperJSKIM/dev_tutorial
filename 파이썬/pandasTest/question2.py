def plus_n_over_ten(number):
    str_number = str(number)
    total = int(str_number[0])+int(str_number[1])
    if total >= 10:
        return (number)
    else:
        return (0)

def listToString(str_list):
    result = ""
    for s in str_list:
        if str_list[len(str_list)-1] == s:
            result += str(s)
        else:
            result += str(s)+"+"
    return result

A = plus_n_over_ten(int(input('1번 숫자')))
B = plus_n_over_ten(int(input('2번 숫자')))
C = plus_n_over_ten(int(input('3번 숫자')))
D = plus_n_over_ten(int(input('4번 숫자')))
E = plus_n_over_ten(int(input('5번 숫자')))

arr=[A,B,C,D,E]
new_arr=[]

for i in arr:
    if i != 0:
        new_arr.append(i)

result = 0
if new_arr:
    for j in new_arr:
        result += j
    print("결과: %s = %d" % (listToString(new_arr), result))
else:
    print("앞 뒷 자리의 합이 10 이상인 숫자가 없습니다.")

