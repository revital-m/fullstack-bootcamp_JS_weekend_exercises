function accum(str){
    let myStr = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        myStr += '-' + str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
    }
    return myStr;
}

let resAccum1 = accum("abcd");
let resAccum2 = accum("RqaEzty");
let resAccum3 = accum("cwAt");

console.log(`ex6.1 : resAccum1 = ${resAccum1} , resAccum2 = ${resAccum2} , resAccum3 = ${resAccum3}`);