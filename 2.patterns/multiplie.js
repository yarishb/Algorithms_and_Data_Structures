function findMultiplied(array){
    // The target is to find the pair of numbers in array
    // and their sum has to equal zero

    let first = 0
    let last = array.length - 1;

    while(first < last){
        let sum = array[first] + array[last]
        if(sum === 0){
            console.log([array[first], array[last]]);
            return true
        }else if(sum > 0){
            last --;
        }else if(sum < 0){
            first++
        }
    }

    return true
}


findMultiplied([-4,-3,-2,-1,0,5,10])