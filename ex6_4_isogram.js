function isIsogram(str){
    if (str === '') {
        return true;
    }
    let isIsogram = false;
    let myStrSet = new Set([...str.toLowerCase()]);
    let uniqStr = Array.from(myStrSet).join('');
    if (uniqStr.localeCompare(str.toLowerCase()) === 0) {
        isIsogram = true;
    }
    return isIsogram;
}

let resIsIsogram1 = isIsogram("Dermatoglyphics");
let resIsIsogram2 = isIsogram("aba");
let resIsIsogram3 = isIsogram("moOse");

console.log(`ex6.4 : resIsIsogram1 = ${resIsIsogram1} , resIsIsogram2 = ${resIsIsogram2} , resIsIsogram3 = ${resIsIsogram3}`);