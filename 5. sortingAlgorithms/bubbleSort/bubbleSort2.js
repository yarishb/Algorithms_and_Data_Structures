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

//or

function bubble(arr){
     //shorter way
     let swaped;

     for(let i = arr.length; i > 0; i--){
          swaped = true
          for(let j = 0; j < i-1; j++){
               if(arr[j] > arr[j+1]){
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                    swaped = false
               }
          }
          if(swaped) break
     }
     return arr
}

bubble([1,2,4,12,3,5,92,32,11,90,1])


