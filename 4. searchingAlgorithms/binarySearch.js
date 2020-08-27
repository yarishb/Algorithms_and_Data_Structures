function binarySearch(arr, num) {
     // The binary search algorithm. It works only in ordered lists.
     
     let left = 0;
     let right = arr.length - 1
     let sum = Math.floor((left + right) / 2)

     while (arr[sum] !== num && left <= right) {
          if(num > arr[sum]) left = sum + 1
          else right = sum - 1
          sum = Math.floor((left + right) / 2)
     }
     return arr[sum] === num ? sum : -1
}

binarySearch([1,2,3,4,5,7,8,9,10], 5)