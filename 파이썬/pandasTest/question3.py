
result_3 = 0
result_7 = 0
result_even = 0
result_odd = 0
for i in range(10000):
    if not i%3:
        result_3+=i
        if i%2:
            result_odd+=i
        else:
            result_even+=i
    else:
        print(i)

for i in range(10000):
    if not i%7:
        result_7+=i
        if i%2:
            result_odd+=i
        else:
            result_even+=i

print("3의 배수의 합: %d" % result_3)
print("7의 배수의 합: %d" % result_7)
print("7의 배수 이면서 3의 배수 이면서 짝수의 합:%d" % result_even)
print("7의 배수 이면서 3의 배수 이면서 홀수의 합:%d" % result_odd)