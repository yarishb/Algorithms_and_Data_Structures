function factioral(num){
     if(num === 1) return 1;
     return num * factioral(num - 1)
}

factioral(3)


// Non recursion way of finding factorial


function nonRecursionFactorial(num){
     let total = 1
     for(let i = num; i > 1; i--){
          total *= i 
     }
     return total
}

nonRecursionFactorial(3)