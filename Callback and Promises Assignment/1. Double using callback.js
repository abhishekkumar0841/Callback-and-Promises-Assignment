function arrOfInt(arr, doubledArray){
    console.log(`Normal array is : ${arr}`);
    return doubledArray(arr);
}

function doubledArray(arr){
    let emptyArr = [];
    for(let el of arr){
        emptyArr.push(el * 2);
    }
    return emptyArr;
}

let myArr = [3, 2, 4, 6, 9];
console.log(arrOfInt(myArr, doubledArray));
