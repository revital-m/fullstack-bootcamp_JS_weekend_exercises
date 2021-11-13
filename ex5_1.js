function trimmingString(str){
    return str.substring(1,str.length -1);
}

let resTrimmingString1 = trimmingString('my string');
let resTrimmingString2 = trimmingString('also my string');

console.log(`ex5.1 : resTrimmingString1 = ${resTrimmingString1}, resTrimmingString2 = ${resTrimmingString2}`);