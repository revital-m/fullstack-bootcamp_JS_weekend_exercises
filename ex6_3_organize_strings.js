function longest(str1, str2){
    let myStrSet = new Set([...str1,...str2]);
    let longestStr = Array.from(myStrSet).sort().join('');
    return longestStr;
}

let reslongest1 = longest("xyaabbbccccdefww", "xxxxyyyyabklmopq");
let reslongest2 = longest("abcdefghijklmnopqrstuvwxyz" , "abcdefghijklmnopqrstuvwxyz");

console.log(`ex6.3 : reslongest1 = ${reslongest1} , reslongest2 = ${reslongest2}`);