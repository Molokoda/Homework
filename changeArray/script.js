oddArray = [2, 3, 5, 7, 8];
evenArray = [4, 5 ,6, 7];

function changeArray(arr){
    let changeArray = [];
    if(arr.length % 2 === 0){
        for(i = 0; i < arr.length; i++){
            changeArray[i] = arr[ (arr.length / 2 + i) % arr.length];
        }
    }
    else{
        for(i = 0; i < arr.length; i++){
            if(( Math.round(arr.length / 2) + i) % arr.length === 0){
                changeArray[i] = arr[Math.round(arr.length / 2) - 1]
            }
            changeArray[i] = arr[ (Math.round(arr.length / 2) + i) % arr.length];
        }
    }
    return changeArray;
}
console.log(changeArray(evenArray));
console.log(changeArray(oddArray));