"use strict";
const button = document.getElementById('button');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
function sumInputValues(num1, num2) {
    return num1 + num2;
}
button.addEventListener('click', () => {
    console.log(sumInputValues(Number(input1.value), Number(input2.value)));
});
