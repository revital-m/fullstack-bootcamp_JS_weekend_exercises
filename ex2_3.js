function findNextSquare(num){
    let numSqrt = Math.sqrt(num);
    if (numSqrt === (Math.floor(numSqrt))) {
        return Math.pow(numSqrt+1,2);
    }
    else {
        return -1;
    }
}

let example1 = findNextSquare(121);
let example2 = findNextSquare(625);
let example3 = findNextSquare(114);

console.log(`ex2.3 : example1 = ${example1}, example2 = ${example2}, example3 = ${example3}`);