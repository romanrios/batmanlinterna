function sumar1(nombre, num1, num2) {
  document.write(`El resultado de tu suma es ${num1 + num2}`);
}

sumar1(
  prompt("Decime tu nombre"),
  Number(prompt("Ingresa un número: ")),
  Number(prompt("Ingresa un número: "))
);

let restar0 = (num1, num2) => {
  console.log(num1 - num2);
};
restar0(10, 5);

let saludar = (nombre) => {
  console.log("Hola ${nombre}");
  saludar("Agostina");
};

/* CALLBACK */

let calculadora = (num1, num2, operacion) => operacion(num1, num2);
let sumar2 = (num1, num2) => num1 + num2;
let restar = (num1, num2) => num1 - num2;
let multiplicar = (num1, num2) => num1 * num2;
let dividir = (num1, num2) => num1 / num2;

console.log(calculadora, 10, 5, sumar2);
