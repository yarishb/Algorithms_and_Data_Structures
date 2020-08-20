// This is quick sort algorithm

function pivot(arr, start = 0, end = arr.length + 1){
     // It's a pivot function that returns index of pivot
     // Pivot is middle value between lower and higher values.
     // Lower values are going left and higher right.
     let pivot  = arr[start];
     let swapIdx = start;

     for(let i = start + 1; i<= end; i++){
          if(pivot > arr[i]){
               swapIdx++;
               [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]]
          }
     }
     [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]]

     return swapIdx; 
}

//This function sends recursively data over to pivot and depending on pivot sorts an array
function quickSort(arr, left = 0, right = arr.length - 1){
     if(left < right){
          let pivotIdx = pivot(arr, left, right)
          quickSort(arr, left, pivotIdx - 1)
          quickSort(arr, pivotIdx + 1, right)
     }
     return arr
}


quickSort([9,1,3,6,21,5,17,22])