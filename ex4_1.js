function fibonacci(n){
    let arrFibonacci = [1,1]
    for (let i = 2; i < n; i++) {
        arrFibonacci.push(arrFibonacci[arrFibonacci.length-2]+arrFibonacci[arrFibonacci.length-1]);
    }
    return arrFibonacci;
}

let resFibonacci1 = fibonacci(9);
let resFibonacci2 = fibonacci(10);
let resFibonacci3 = fibonacci(11);
let resFibonacci4 = fibonacci(12);

console.log(`ex4.1 : resFibonacci1 = ${resFibonacci1}  , resFibonacci2 = ${resFibonacci2}  , resFibonacci3 = ${resFibonacci3}  , resFibonacci4 = ${resFibonacci4}`);