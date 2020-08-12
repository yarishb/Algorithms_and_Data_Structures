function fib(num){
     //Fibonacci numbers with recursion
     if(num <= 2) return 1
     return fib(num - 1) + fib(num - 2)
}

fib(2)