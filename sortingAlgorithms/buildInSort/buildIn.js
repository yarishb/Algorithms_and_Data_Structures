// There are build in js sorting methods.


function numberCompare(num1, num2){
     return num1 - num2
}

[6,4,5,7,54,26,14,8].sort(numberCompare)

function compareStrings(str1, str2){
     return str1.length - str2.length
}

["Bohdan", "Yarish", "Web Developer", "React", "Js", "Data Structures", "Algorithms"].sort(compareStrings)