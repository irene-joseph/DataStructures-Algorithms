//INSERTION SORT
// Runtime: 0(n^2) average and worst case. 
// Memory: 0(1).

/*Insertion sort is the sorting mechanism where the sorted array is built having one item at a time. 
The array elements are compared with each other sequentially and then arranged simultaneously in some particular order.*/

/*splice syntax : array.splice(index, howmany, item1, ....., itemX)
return value of splice function is an array of the removed elements.*/

function insertionSort(array) {
  const arrlength = array.length;
	for (let i = 0; i < arrlength; i++) {
		if (array[i] < array[0]) {
      //move number to the first position
      array.unshift(array.splice(i,1)[0]);
    } else {
      if (array[i] < array[i-1]) {
        //to find the exact position
        for (var j = 1; j < i; j++) {
          if (array[i] >= array[j-1] && array[i] < array[j]) {
            //move number to the exact position
            array.splice(j,0,array.splice(i,1)[0]); 
          }
        }
      }
    }
  }
}
