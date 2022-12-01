def sortArray(myList):
    oddList = []
    evenList = []
    for x in myList:
        if x % 2 == 0:
            evenList.append(x)
        else:
            oddList.append(x)
    oddList.sort()
    evenList.sort()
    newList = oddList + evenList
    return newList


print("Enter your numbers: ")
val = list(map(int, input().split()))
print(sortArray(val))