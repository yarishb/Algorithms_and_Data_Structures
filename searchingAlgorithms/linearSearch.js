function linearSearch(arr, num){
     //Finding element in array using linear search algorithm
     for(let j = 0; j <= arr.length; j++){
          if(arr[j] === num) return j
     }
     return -1
}

linearSearch([1,2,4,5,6,2,3,5], 4)
