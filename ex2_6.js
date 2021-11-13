let centuryFromYear = (year) => ((Math.floor(year/100)  !== year/100) ? (Math.floor(year/100) + 1) : (year/100));

let resCentury1 = centuryFromYear(1705);
let resCentury2 = centuryFromYear(1900);
let resCentury3 = centuryFromYear(1601);
let resCentury4 = centuryFromYear(2000);

console.log(`ex2.6 : resCentury1 = ${resCentury1}, resCentury2 = ${resCentury2}, resCentury3 = ${resCentury3}, resCentury4 = ${resCentury4}`);