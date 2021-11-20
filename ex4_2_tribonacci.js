function tribonacci(n){
    let arrTribonacci = [];
    if (n > 0) {
        arrTribonacci = [1,1,1];
    }
    
    for (let i = 3; i < n; i++) {
        arrTribonacci.push(arrTribonacci[arrTribonacci.length-3] + arrTribonacci[arrTribonacci.length-2]+arrTribonacci[arrTribonacci.length-1]);
    }
    return arrTribonacci;
}

let resTribonacci1 = tribonacci(0);
let resTribonacci2 = tribonacci(10);
let resTribonacci3 = tribonacci(11);
let resTribonacci4 = tribonacci(12);

console.log(`ex4.2 : resTribonacci1 = ${resTribonacci1}  , resTribonacci2 = ${resTribonacci2}  , resTribonacci3 = ${resTribonacci3}  , resTribonacci4 = ${resTribonacci4}`);