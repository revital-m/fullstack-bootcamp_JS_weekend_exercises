function nb_year(p0, percent, aug, p){
    let numOfYears = 0;
    let population = p0;
    while (population < p) {
        population += (population*(percent/100)) + aug;
        numOfYears ++;        
    }
    return numOfYears;
}

let resNBYear1 = nb_year(1500, 5, 100, 5000);
let resNBYear2 = nb_year(1500000, 2.5, 10000, 2000000);

console.log(`ex3.1 : resNBYear1 = ${resNBYear1}, resNBYear2 = ${resNBYear2}`);