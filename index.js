"use strict";
const add = (a, b, c) => {
    console.log(c);
    return a + b;
};
const logMessage = (msg) => {
    console.log('Логи: ' + msg);
};
let sayHello;
// Теперь определим функцию, соответствующую подписи
sayHello = (name) => {
    console.log('Привет, ' + name);
};
sayHello('Кирилл'); //Привет, Кирилл
const form = document.getElementById('signup-form');
console.log(form.method); // post
