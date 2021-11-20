function toCamelCase(str){
    let camelCaseStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-' || str[i] === '_') {
            camelCaseStr += str[i+1].toUpperCase();
            i++;
        }
        else {
            camelCaseStr += str[i];
        }
    }
    return camelCaseStr;
}

let resCamelCase1 = toCamelCase("the-stealth-warrior");
let resCamelCase2 = toCamelCase("The_Stealth_Warrior");

console.log(`ex5.3 : resCamelCase1 = ${resCamelCase1}, resCamelCase2 = ${resCamelCase2}`);