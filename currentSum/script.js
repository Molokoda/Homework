numbers = [2, 3, 5, 7, 11, 13, 17, 19];

function currentSums(number){
    let sumsArray = [];
    number.reduce( (sum, number, index) => {
        sumsArray[index] = sum + number;
        sum += number;
        return sum;
    }, 0);
    return sumsArray;
}

console.log(currentSums(numbers));