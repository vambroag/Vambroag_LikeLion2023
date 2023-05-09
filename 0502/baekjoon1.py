test_score = int(input())
test_result = ""
if test_score >= 90 and test_score <= 100:
    test_result = "A"
elif test_score >= 80 and test_score < 90:
    test_result = "B"
elif test_score >= 70 and test_score < 80:
    test_result = "C"
elif test_score >= 60 and test_score < 70:
    test_result = "D"
else:
    test_result = "F"
        
print(test_result)