//simple bubble sorting algorithm

function swap (arr, idx1, idx2) {
     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}


function bubbleSort(arr) {
     for(var i = arr.length; i > 0; i--){
          for(var j = 0; j < i - 1; j++){
               if(arr[j] > arr[j + 1]){
                    swap(arr, j, j + 1)
               }
          }
     }
     return arr
}

bubbleSort([8,64,17,5,2,4,1,3])