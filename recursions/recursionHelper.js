function collectOdds(arr){
     //The function shows how to collect odd values using recursion function with a helper

     let result = []

     function helper(inputHelper){
          if(inputHelper.length === 0){
               return;
          }
          if(inputHelper[0] % 2 === 0){
               result.push(inputHelper[0])
          } 
          helper(inputHelper.slice(1))
     }

     helper(arr)

     return result
}

collectOdds([1,2,3,4,5,7,8,9])