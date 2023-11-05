# returns a sorted array
def merge_sorted_array(array1,array2):
    if len(array1) == 0:
        return array2
    if len(array2) == 0:
        return array1
    for each in array2:
        array1.append(each)
    array1.sort()
    return array1
