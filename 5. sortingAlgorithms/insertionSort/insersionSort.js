// This is an insertion sort algorithm

function insersionSort(arr){
     for(let i = 1; i < arr.length; i++){
          let currentValue = arr[i]
          for(var j = i - 1; j >= 0 && arr[j] > currentValue; j--){
               arr[j + 1] = arr[j]
          }
          arr[j + 1] = currentValue
     }
     return arr
}

insersionSort([3,1,4,14,2,74,32])