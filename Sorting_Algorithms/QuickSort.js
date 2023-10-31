// QUICK SORT
// Runtime: O(n log n) average case, O(n^2) worst case (rare). 
// Memory: O(log n) average case, O(n) worst case due to recursive call stack.
/*Quick Sort uses a divide-and-conquer approach to sort an array. It selects a 'pivot' element and partitions the other elements into two sub-arrays, 
according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. The pivot selection and partitioning 
steps continue until the base case is reached, where the sub-arrays are of size 0 or 1. Quick Sort is generally faster than many other sorting 
algorithms, especially for large datasets, due to its efficient average-case performance. However, its worst-case time complexity occurs when the 
pivot selection consistently leads to unbalanced partitions, resulting in O(n^2) time complexity, but this scenario is rare and can often be mitigated 
with good pivot selection strategies such as selecting a random element or using the median-of-three method.*/

function quickSort(array, left, right){
  const len = array.length; 
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    
    //recursive call to sort
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}
   
function partition(array, pivot, left, right){
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(array[i] < pivotValue){
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
