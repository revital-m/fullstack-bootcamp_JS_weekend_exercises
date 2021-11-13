function abbreviateTwoWords(str){
    let myStr = str.trim();
    let idxSpace = myStr.indexOf(' ');
    let abbreviateStr = `${myStr[0].toUpperCase()}.${myStr[idxSpace+1].toUpperCase()}`;
    return abbreviateStr;
}

let resAbbreviate1 = abbreviateTwoWords("Sam Harris");
let resAbbreviate2 = abbreviateTwoWords("Patrick Feeney");

console.log(`ex5.5 : resAbbreviate1 = ${resAbbreviate1}, resAbbreviate2 = ${resAbbreviate2}`);