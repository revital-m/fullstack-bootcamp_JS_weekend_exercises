function countDuplicates(str){
    let myStr = str.toLowerCase();
    let duplicatObj = {};
    let myStrObj = '';
    for (let i = 0; i < myStr.length; i++) {
        if (!duplicatObj[myStr[i]]) {
            duplicatObj[myStr[i]] = 1;
        }
        else {
            duplicatObj[myStr[i]]++;
        }
    }
    for (let key in duplicatObj) {
        if (duplicatObj[key] === 1) {
            delete duplicatObj[key];
        }
        else {
            myStrObj += `'${key}'-${duplicatObj[key]} `;
        }
    }
    return `${Object.keys(duplicatObj).length} # ${myStrObj} `;
}

let resDuplicates1 = countDuplicates("abcde");
let resDuplicates2 = countDuplicates("aabbcde");
let resDuplicates3 = countDuplicates("aabBcde");
let resDuplicates4 = countDuplicates("indivisibility");
let resDuplicates5 = countDuplicates("Indivisibilities");
let resDuplicates6 = countDuplicates("aA11");
let resDuplicates7 = countDuplicates("ABBA");

console.log(`ex6.2 : resDuplicates1 = ${resDuplicates1} , resDuplicates2 = ${resDuplicates2} , resDuplicates3 = ${resDuplicates3} , resDuplicates4 = ${resDuplicates4} , resDuplicates5 = ${resDuplicates5} , resDuplicates6 = ${resDuplicates6} , resDuplicates7 = ${resDuplicates7}`);