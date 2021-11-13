function shortestWords(str){
    let shortes = str.length;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            shortes = (shortes > count) ? count : shortes;
            count = 0;
        }
        else {
            count++;
        }
    }
    shortes = (shortes > count) ? count : shortes;
    return shortes;
}

let resshortestWords1 = shortestWords("String");
let resshortestWords2 = shortestWords("Weird string case");
let resshortestWords3 = shortestWords("Weird case string");

console.log(`ex5.7 : resshortestWords1 = ${resshortestWords1} , resshortestWords2 = ${resshortestWords2} , resshortestWords3 = ${resshortestWords3}`);