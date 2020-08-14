//This is a merge sorting algorithm


// this is the function that slices taken array with recursion and sends slices over to merge function
function mergeSort(arr){
     if(arr.length <= 1) return arr
     let mid = Math.floor(arr.length / 2)
     let left = mergeSort(arr.slice(0, mid))
     let right = mergeSort(arr.slice(mid))
     return merge(left, right)
}


// this function takes slices and compare them with putting in order
// the result array will be returned in mergeSort

function merge(arr, arr2){
     let result = [];
     let i = c = 0
     
     while(i < arr.length && c < arr2.length){
          if(arr[i] < arr2[c]){
               result.push(arr[i])
               i++
          }else{
               result.push(arr2[c])
               c++
          }
     }
     while (i < arr.length) {
          result.push(arr[i])
          i++
     }
     while(c < arr2.length){
          result.push(arr2[c])
          c++
     }
     return result
}

mergeSort([1,10,50,40,14,99,100])