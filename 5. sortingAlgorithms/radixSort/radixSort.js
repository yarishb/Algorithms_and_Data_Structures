// This is radix sort algorithm

// WARNING!!! IT WORKS ONLY WITH NUMBERS !!!WARNING //

function getDigit(num, i) {
     // This function shows what digit is it
     return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
   }
   
   function digitCount(num) {
     // This function counts how many digits are in number
     if (num === 0) return 1;
     return Math.floor(Math.log10(Math.abs(num))) + 1;
   }
   
   function mostDigits(nums) {
     // This function shows what is the most number of digits in number :)
     let maxDigits = 0;
     for (let i = 0; i < nums.length; i++) {
       maxDigits = Math.max(maxDigits, digitCount(nums[i]));
     }
     return maxDigits;
   }

function radixSort(nums){
     // This function sorts digits in right buckets and then concats them to relative array 
     let maxDigitsCount = mostDigits(nums);

     for(let k = 0; k < maxDigitsCount; k++){
          let digitBuckets = Array.from({length: 10}, () => [])
          for(let i = 0; i< nums.length; i++){
               let digit = getDigit(nums[i], k)
               digitBuckets[digit].push(nums[i])
          }
          nums = [].concat(...digitBuckets)
     }
     return nums
}

radixSort([1,5,2,14,12,54,11])