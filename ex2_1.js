function sumLowestNum(arr){
    let sum, min1, min2;
    if (arr[0]<arr[1]) {
        min1 = arr[0];
        min2 = arr[1];
    }
    else {
        min1 = arr[1];
        min2 = arr[0];
    }
    
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] < min1) {
            min2 = min1;
            min1 = arr[i];
        }
        else if (arr[i] < min2) {
            min2 = arr[i];
        }             
    }
    sum = min1 + min2;
    return sum;
}

let arr1 = [19, 5, 42, 2, 77];
let arr2 = [10, 343445353, 3453445, 3453545353453];
let sum1 = sumLowestNum(arr1);
let sum2 = sumLowestNum(arr2);

console.log(`ex2.1 : sum1 = ${sum1}, sum2 = ${sum2}`);