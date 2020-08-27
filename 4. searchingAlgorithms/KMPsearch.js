// Time Complexity - O(n + m)
// Space complexity - O(n)

function arrayPatternUtil(pattern){
     const arrayPattern = [];
     let prefix = 0;
     let sufix = 1;

     while(arrayPattern.length < pattern.length){
          if(pattern[prefix] === pattern[sufix]){
               arrayPattern.push(prefix + 1)
               prefix++;
               sufix++;
          }else if(prefix === 0){
               arrayPattern.push(0);
               sufix++;
          }else prefix = arrayPattern[prefix - 1]
     }
     return arrayPattern
}

function kmpSearch(text, pattern){
     const arrayPattern = arrayPatternUtil(pattern);
     let textIndex = 0;
     let patternIndex = 0;

     while (textIndex < text.length) {
          if(text[textIndex] === pattern[patternIndex]){
               if(patternIndex === pattern.length - 1){
                    return textIndex - pattern.length  + 1
               }else{
                    textIndex++;
                    patternIndex++;
               }
          }else if(patternIndex === 0){
               textIndex++;
          }else{
               patternIndex = arrayPattern[patternIndex - 1]
          }
     }
     return -1
}


function KMPcounter(text, pattern){
     const arrayPattern = arrayPatternUtil(pattern);
     let textIndex = 0;
     let patternIndex = 0;
     let counter = 0;

     while (textIndex < text.length) {
          if (text[textIndex] === pattern[patternIndex]) {
            if (patternIndex === pattern.length - 1) {
              textIndex++;
              patternIndex = 0;
              counter++;
            } else {
              textIndex++;
              patternIndex++;
            }
          } else if (patternIndex === 0) {
            textIndex++;
          } else {
            patternIndex = arrayPattern[patternIndex - 1];
          }
        }
     return counter
}


console.log(KMPcounter('dabcdabcyabkglabcdcxabcdabcdabcy', 'abcdabcyd')); // 0