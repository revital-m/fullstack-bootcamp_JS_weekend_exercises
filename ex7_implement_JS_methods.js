let arr = [1,2,3,4,5,6,7,8,9,10];

let evenArr = arr.filter((num) => (num%2 === 0));
let doubleArr = arr.map((num) => (num*2));
let oddTripleArr = [];
arr.forEach(num => {
    if (num%2 === 1) {
        oddTripleArr.push(num*3);
    }
});

console.log(`ex7 : evenArr = ${evenArr} , doubleArr = ${doubleArr} , oddTripleArr = ${oddTripleArr}`);
