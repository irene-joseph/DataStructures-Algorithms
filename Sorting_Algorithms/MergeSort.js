//MERGE SORT
//Time complexity: O(n log ( n)) average and worst case. 
//Space complexity: O(n)
/*Merge sort divides the array in half, sorts each of those halves, and then merges them back together. Each
of those halves has the same sorting algorithm applied to it. Eventually, you are merging just two singleelement
arrays.*/

//Code
function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in middle into right and left
  const length = array.length;
  const middle = Math.floor(length / 2)
  const left = array.slice(0, middle) 
  const right = array.slice(middle)
  return merge(mergeSort(left),mergeSort(right)) //recursive call
}

function merge(left, right){
  const finalArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < left.length && 
        rightIndex < right.length){
     if(left[leftIndex] < right[rightIndex]){
       finalArray.push(left[leftIndex]);
       leftIndex++;
     } else{
       finalArray.push(right[rightIndex]);
       rightIndex++
    }
  }  
  return finalArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
