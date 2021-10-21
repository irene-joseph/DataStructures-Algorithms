def reverse(inputstring):
    return inputstring[::-1]

def reverse2(inputstring):
    reversedstring = ""
    i = len(inputstring) - 1
    while i >= 0:
        reversedstring += inputstring[i]
        i -= 1
    return reversedstring


print(reverse("hello"))
print(reverse2("hello"))
