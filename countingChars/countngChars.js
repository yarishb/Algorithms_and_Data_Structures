function findChar(str){
    let obj = {}

    for(let char of str){
        char = char.toLowerCase()
        if(isValid(char)){
            obj[char] = ++obj[char] || 1
        }
    }
    console.log(obj);
}


function isValid(char){
    let code = char.charCodeAt(0)
    
    if( !(code > 47 && code < 58) && 
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)){
            return false
        }
        return true
}

findChar("Hello world hi!!!")