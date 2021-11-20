function peopleOnTheBus(arr){
    let numPeopleOnBus = 0;
    for (let i = 0; i < arr.length; i++) {
        numPeopleOnBus += arr[i][0] - arr[i][1];
    }
    return numPeopleOnBus;
}

let arrPeopleOnTheBus = [[10,0],[5,7],[15,10],[7,10],[5,5],[0,3]];

let resPeopleOnTheBus = peopleOnTheBus(arrPeopleOnTheBus);

console.log(`ex3.2 : resPeopleOnTheBus = ${resPeopleOnTheBus}.`);