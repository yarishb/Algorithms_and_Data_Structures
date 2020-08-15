//This is a merge sorting algorithm


// this is the function that slices taken array with recursion and sends slices over to merge function
function mergeSort(arr){
     if(arr.length <= 1) return arr
     let mid = Math.floor(arr.length / 2)
     let left = mergeSort(arr.slice(0, mid))
     let right = mergeSort(arr.slice(mid))
     return merge(left, right)
}


// this function takes slices and compare them with putting in order
// the result array will be returned in mergeSort

function merge(arr, arr2){
     let result = [];
     let i = c = 0
     
     while(i < arr.length && c < arr2.length){
          if(arr[i] < arr2[c]){
               result.push(arr[i])
               i++
          }else{
               result.push(arr2[c])
               c++
          }
     }
     while (i < arr.length) {
          result.push(arr[i])
          i++
     }
     while(c < arr2.length){
          result.push(arr2[c])
          c++
     }
     return result
}

mergeSort(['Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming','California','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota'])