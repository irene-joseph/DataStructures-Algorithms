// Bubble Sort
// Runtime: 0( n2 ) average and worst case. 
// Memory: 0( 1).
/*In bubble sort, we start at the beginning of the array and swap the first two elements if the first is greater
than the second. Then, we go to the next pair, and so on, continuously making sweeps of the array until it is
sorted. In doing so, the smaller items slowly"bubble" up to the beginning of the list.*/

//Code
function bubbleSort(array) {
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    for (let j = 0; j < arrayLength; j++) { 
      if(array[j] > array[j+1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }        
  }
}
