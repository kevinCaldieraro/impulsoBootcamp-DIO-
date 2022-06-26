"use strict";
function sumValues(inp1, inp2) {
    if (typeof inp1 === 'string' || typeof inp2 === 'string') {
        return inp1.toString() + inp2.toString();
    }
    else {
        return inp1 + inp2;
    }
}
console.log(sumValues(2, 4));
console.log(sumValues('olá, ', 'tudo bem?'));
console.log(sumValues('idade: ', 19));
//Tipando o return das funções ------------------
function sumNumericalValues(num1, num2) {
    return num1 + num2;
}
console.log(sumNumericalValues(3, 2));
//Funções void não retornam nada -----------------
function voidFunction(v1, v2) {
    console.log(v1 + v2);
}
//Callback --------------------------------------------------------------
function sumAndValuesHandling(num1, num2, callback) {
    let result = num1 + num2;
    return callback(result);
}
function squared(num) {
    return num * num;
}
function divideByHimself(num) {
    return num / num;
}
console.log(sumAndValuesHandling(4, 2, squared));
console.log(sumAndValuesHandling(2, 3, divideByHimself));
