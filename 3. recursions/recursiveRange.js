function recursionRange(x){
     //Finding the addition of all items before x
     
     if (x === 0) return 0;
     return x + recursionRange(x - 1)
}