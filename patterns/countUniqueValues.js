function countUniqueValues(arr){
    // Create the function that counts how many unique values are in array
        // The input is array and the output is number

    let output = 0
    let allUnique = []

    for(let num of arr){
        if(num !== output){
            output = num
            allUnique.push(output)
        }
    }
    console.log(allUnique.length);
}

countUniqueValues([1,1,1,1,1,1,2,3])

//or


function countUniqueValues2(arr){
    if(arr.length === 0) return 0
    var i = 0

    for(var j = 1; j  < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    console.log(i+1);
    return i + 1
}
countUniqueValues2([1,1,1,1,1,1,2,3])