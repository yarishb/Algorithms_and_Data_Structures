//create the function that takes two string
//a function should compare two string and say if they have the same numbers of the same letters

function anagram (word1, word2){
    let obj = {}


    if(word1.length !== word2.length){
        console.log("Diferrent length");
        return false
    }

    for(let simbol of word1){
        obj[simbol] = (obj[simbol] || 0) + 1
    }
    for(let simbol of word2){
        if(obj[simbol]){
            obj[simbol] -= 1
        }else{
            console.log(false);
            return false
        }
    }
    
    console.log(obj);

    console.log(true);
    return true
}


anagram("haello", "laleho")



// function anagram2(word1, word2){
//     let obj = {}
//     let obj2 = {}

    
//     if(word1.length !== word2.length){
//         console.log("Length of two words is not the same");
//         return false
//     }

//     for(let letter of word1){
//         obj[letter] = (obj[letter] || 0) + 1
//     }
//     for(let letter2 of word2){
//         obj2[letter2] = (obj2[letter2] || 0) + 1
//     }

//     for(let key in obj){
//         if(!(key in obj2)){
//             console.log(false);
//             return false
//         }
//         if(obj[key] !== obj2[key]){
//             console.log(false);
//             return false
//         }
//     }

//     console.log(true);
//     return true
// }


// anagram2("hello", "lleho")
