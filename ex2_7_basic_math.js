function basicOp(operation, value1, value2){
    let res = 0;
    switch (operation) {
        case '+':
            res = Number(value1) + Number(value2);
            break;
        case '-':
            res = Number(value1) - Number(value2);
            break;
        case '*':
            res = Number(value1) * Number(value2);
            break;
        case '/':
            res = Number(value1) / Number(value2);
            break;
        default:
            res = 'Not a valid operation.'
            break;
    }
    return res;
}

let resBasicOp1 = basicOp('+', 4, 7);
let resBasicOp2 = basicOp('-', 15, 18);
let resBasicOp3 = basicOp('*', 5, 5);
let resBasicOp4 = basicOp('/', 49, 7);

console.log(`ex2.7 : resBasicOp1 = ${resBasicOp1}, resBasicOp2 = ${resBasicOp2}, resBasicOp3 = ${resBasicOp3}, resBasicOp4 = ${resBasicOp4}`);