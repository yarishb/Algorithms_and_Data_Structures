//this is selection sort algorithm

function selectionSort(arr){
     let len = arr.length

     for(let i = 0; i < len; i++){
          let min = i
          for(let j = i + 1; j < len; j++){
               if(arr[min] > arr[j]){
                    min = j
               }
          }
          if(min !== i){
               [arr[i], arr[min]] = [arr[min], arr[i]]
          }
     }
     return arr
}

selectionSort([1,15,2,74,12,3])