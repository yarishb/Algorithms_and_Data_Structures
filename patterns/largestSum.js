function maxSum(arr, num){
     // Create the function that will counts largest sum

     let tempSum = 0
     let maxSum = 0

     for(let i=0; i < num; i++){
          maxSum += arr[i]
     }
     tempSum = maxSum
     for(let i = num; i < arr.length; i ++){
          tempSum = tempSum - arr[i-num] + arr[i]
          maxSum = Math.max(tempSum, maxSum)
     }
     console.log(maxSum);
     return maxSum
}

maxSum([2,6,9,2,1,8,5,6,3],3)
