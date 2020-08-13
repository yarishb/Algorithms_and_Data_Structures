//This is optimized version of bubble sorting 
//this version stops sorting when array is sorted.

function swap (arr, idx1, idx2) {
     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function bubbleSort(arr){
     let noSwap;

     for(let i = arr.length; i > 0; i--){
          noSwap = true
          for(let j = 0; j < i - 1; j++){
               console.log(arr);
               if(arr[j] > arr[j+1]){
                    swap(arr, j, j + 1)
                    noSwap = false
               }
          }
          if(noSwap) break
     }
     return arr
}

bubbleSort([8,1,2,3,45,6,7,81,9])