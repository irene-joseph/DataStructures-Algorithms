def reverse(inputstring):
    return inputstring[::-1]

def reverse2(inputstring):
    reversedstring = []
    i = len(inputstring) - 1
    while i >= 0:
        reversedstring.append(inputstring[i])
        i -= 1
    return ''.join(reversedstring)

def reverse3(inputstring):
    first = 0
    last = len(inputstring) - 1
    inputstring = list(inputstring)
    while first < last:
        inputstring[first], inputstring[last] = inputstring[last], inputstring[first]
        first+=1
        last-=1
    return ''.join(inputstring)

print(reverse("hello"))
print(reverse2("hello"))
print(reverse3("hello"))
