function hash(key, arrLen){
     let total = 0

     for(let char of key){
          let value = char.charCodeAt(0) - 96
          total = (total + value) % arrLen
     }
     return total
}