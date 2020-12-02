let str = "Каждый охотник желает знать, где сидит фазан."; 
function firstLetters(str){
    let arrayOfWords = str.split(' ');
    let arrayOfFirstLetters = arrayOfWords.map( word => word[0]);
    return arrayOfFirstLetters;   
}
console.log(firstLetters(str));