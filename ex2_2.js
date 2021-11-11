function binaryToBaseTen(arr){
    return num = parseInt(arr.join(''),2);
}

let test1 = [0, 0, 0, 1];
let test2 = [0, 0, 1, 0];
let test3 = [0, 1, 0, 1];
let test4 = [1, 0, 0, 1];
let test5 = [0, 0, 1, 0];
let test6 = [0, 1, 1, 0];
let test7 = [1, 1, 1, 1];
let test8 = [1, 0, 1, 1];

let res1 = binaryToBaseTen(test1);
let res2 = binaryToBaseTen(test2);
let res3 = binaryToBaseTen(test3);
let res4 = binaryToBaseTen(test4);
let res5 = binaryToBaseTen(test5);
let res6 = binaryToBaseTen(test6);
let res7 = binaryToBaseTen(test7);
let res8 = binaryToBaseTen(test8);

console.log(`ex2.2 : res1 = ${res1}, res2 = ${res2}, res3 = ${res3}, res4 = ${res4}, res5 = ${res5}, res6 = ${res6}, res7 = ${res7}, res8 = ${res8}`);

