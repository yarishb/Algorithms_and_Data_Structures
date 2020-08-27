function some(arr1, arr2){
    //Create a function that takes two arrays and outputs boolean
    //if numbers in second array are twised numbers of first array return true
    //else return false
        
        //get each number from each array
        //compare this number
        //return result
    let obj = {}
    let obj2 = {}

    if(arr1.length !== arr2.length){
        console.log("Arrays are having diferrent length");
        return false
    }

    for(let el of arr1){
        obj[el] = (obj[el] || 0) + 1
    }
    for(let el of arr2){
        obj2[el] = (obj2[el] || 0) + 1
    }
    for(let key in obj){
        if(!(key**2 in obj2)){
            console.log(obj[key]);
            console.log(false);
            return false
        }
        if(obj[key] !== obj2[key**2]){
            console.log(false);
            return false
        }
    }

    console.log(true);
    return true
}

some([11,2,1,3], [4,121,1,9])

