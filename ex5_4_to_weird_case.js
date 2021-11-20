function toWeirdCase(str){
    let weirdCaseStr = '';
    let isEven = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            weirdCaseStr += str[i];
            isEven = 0;
        }
        else {
            if ((isEven % 2) === 0) {
                weirdCaseStr += str[i].toUpperCase();
            }
            else {
                weirdCaseStr += str[i].toLowerCase();

            }
            isEven++;
        }
    }
    return weirdCaseStr;
}

let resWeirdCase1 = toWeirdCase( "String" );
let resWeirdCase2 = toWeirdCase( "Weird string case" );

console.log(`ex5.4 : resWeirdCase1 = ${resWeirdCase1}, resWeirdCase2 = ${resWeirdCase2}`);