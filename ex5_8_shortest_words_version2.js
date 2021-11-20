function longestWords(str){
    let longest = 0;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            longest = (longest < count) ? count : longest;
            count = 0;
        }
        else {
            count++;
        }
    }
    longest = (longest < count) ? count : longest;
    return longest;
}

let resLongestWords1 = longestWords("String");
let resLongestWords2 = longestWords("Weird string case");
let resLongestWords3 = longestWords("Weird case ");

console.log(`ex5.8 : reslongestWords1 = ${resLongestWords1} , reslongestWords2 = ${resLongestWords2} , reslongestWords3 = ${resLongestWords3}`);