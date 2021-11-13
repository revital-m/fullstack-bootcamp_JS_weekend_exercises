let maskify = (str) => ((str.length < 4) ? str : '#'.repeat(str.length-4) + str.slice(-4));

let resMaskify1 = maskify("4556364607935616");
let resMaskify2 = maskify("64607935616");
let resMaskify3 = maskify("1");
let resMaskify4 = maskify("");
let resMaskify5 = maskify("Skippy");
let resMaskify6 = maskify("Nananananananananananananananana Batman!");

console.log(`ex5.6 : resMaskify1 = ${resMaskify1} , resMaskify2 = ${resMaskify2} , resMaskify3 = ${resMaskify3} , resMaskify4 = ${resMaskify4} , resMaskify5 = ${resMaskify5} , resMaskify6 = ${resMaskify6}`);