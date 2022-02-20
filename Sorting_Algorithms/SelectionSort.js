// Selection Sort
// Runtime: 0(n^2) average and worst case. 
// Memory: 0(1).
/*Find the smallest element using a linear scan
and move it to the front (swapping it with the front element). Then, find the second smallest and move it,
again doing a linear scan. Continue doing this until all the elements are in place.*/


//Code
function selectionSort(array){
  var arrayLength = array.length;
  for(let i = 0; i< arrayLength; i++){
    let min = i;
    for(let j = i; j < arrayLength; j++){
      if(array[j]<array[min]){
        min = j;
      }
    }
    //Swapping elements
    let temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
}
