function collectOddValues(arr){

     // This is the function that collects odd numbers with recursion way

     let newArray = []

     if(arr.length === 0){
          return newArray
     }
     if(arr[0] % 2 !== 0){
          newArray.push(arr[0])
     }

     newArray = newArray.concat(collectOddValues(arr.slice(1)))
     return newArray
}

collectOddValues([1,2,3,4,5,6,7,8,9])
