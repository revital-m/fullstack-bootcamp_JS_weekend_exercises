function findUniq(arr){
    let uniqNum = arr[0];
    for (let i = 1; i < arr.length-1; i++) {
        if (arr[i-1] !== arr[i] && arr[i+1] !== arr[i]) {
            uniqNum = arr[i];
        }
    }
    if (arr[arr.length-3] !== arr[arr.length-1] && arr[arr.length-2] !== arr[arr.length-1]) {
        uniqNum = arr[arr.length-1];
    }
    return uniqNum;
}

let testUniq1 = findUniq([ 1, 1, 1, 1, 1, 2 ]);
let testUniq2 = findUniq([ 0, 0, 0, 0.55, 0 ]);

console.log(`ex2.4 : testUniq1 = ${testUniq1}, testUniq2 = ${testUniq2}`);