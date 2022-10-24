const add = (a: number, b: number, c?: number | string) => {
	console.log(c);
  return a + b;
};
const logMessage = (msg: string): void => {
	console.log('Логи: ' + msg);
};
let sayHello: (name: string) => void;
// Теперь определим функцию, соответствующую подписи
sayHello = (name) => {
	console.log('Привет, ' + name);
};
sayHello('Кирилл'); //Привет, Кирилл
const form = document.getElementById('signup-form') as HTMLFormElement;
console.log(form.method); // post