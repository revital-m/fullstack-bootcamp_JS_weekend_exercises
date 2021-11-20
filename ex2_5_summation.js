function summation(num){
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;        
    }
    return sum;
}

let resSummation1= summation(2);
let resSummation2= summation(8);

console.log(`ex2.5 : resSummation1 = ${resSummation1}, resSummation2 = ${resSummation2}`);