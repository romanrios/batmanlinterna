// "x" e "y" son números enteros .
// Devuelve el número más grande
// Si son iguales, devuelve cualquiera de los dos
/* Metodos de MAth */
const obtenerMayor = (x, y) =>
  x == y ? (Math.random() < 0.5 ? x : y) : x < y ? y : x;

console.log(obtenerMayor(6, 7));

//Determinar si la persona según su edad puede ingresar a un evento.
//Si tiene 18 años ó más, devolver --> "Allowed"
//Si es menor, devolver --> "Not allowed"
const mayoriaDeEdad = (edad) => (edad >= 18 ? "Allowed" : "Not allowed");
console.log(mayoriaDeEdad(17), mayoriaDeEdad(18));

//Recibimos un estado de conexión de un usuario representado por un valor numérico.
//Cuando el estado es igual a 1, el usuario está "Online"
//Cuando el estado es igual a 2, el usuario está "Away"
//De lo contrario, presumimos que el usuario está "Offline"
//Devolver el estado de conexión de usuario en cada uno de los casos.
const connection = (status) =>
  status == 1 ? "Online" : status == 2 ? "Away" : "Offline";
console.log(connection(1), connection(2), connection(3));

// Devuelve un saludo en tres diferentes lenguajes:
// Si "idioma" es "aleman", devuelve "Guten Tag!"
// Si "idioma" es "mandarin", devuelve "Ni Hao!"
// Si "idioma" es "ingles", devuelve "Hello!"
// Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
// Tu código:
const saludo = (idioma) => {
  const objetoIdiomas = {
    aleman: "Guten Tag!",
    mandarin: "Ni Hao!",
    ingles: "Hello!",
    default: "Hola!",
  };
  return objetoIdiomas[idioma] || objetoIdiomas["default"];
};
console.log(saludo("aleman"), saludo("mandarin"), saludo("ingles"), saludo());

//La función recibe un color. Devolver el string correspondiente:
//En caso que el color recibido sea "blue", devuelve --> "This is blue"
//En caso que el color recibido sea "red", devuelve --> "This is red"
//En caso que el color recibido sea "green", devuelve --> "This is green"
//En caso que el color recibido sea "orange", devuelve --> "This is orange"
//Caso default: devuelve --> "Color not found"
//Usar el statement Switch.
const colors = (color) => {
  switch (color) {
    case "blue":
      return "This is blue";
    case "red":
      return "This is red";
    case "green":
      return "This is green";
    case "orange":
      return "This is orange";
    default:
      return "Color not found";
  }
};
console.log(colors("green"), colors("not a color"));

// Devuelve "true" si "numero" es 10 o 5
// De lo contrario, devuelve "false"
const esDiezOCinco = (numero) => numero == 10 || numero == 5;
console.log(esDiezOCinco(10));
// voy a asumir que quiere un booleano y no "true" y "false" en strings

// Devuelve "true" si "numero" es menor que 50 y mayor que 20
// De lo contrario, devuelve "false"
const estaEnRango1 = (numero) => numero < 50 && numero > 20;
console.log(estaEnRango1(21));

// Devuelve "true" si "numero" es un entero (int/integer)
// Ejemplo: 0.8 -> false
// Ejemplo: 1 -> true
// Ejemplo: -10 -> true
// De lo contrario, devuelve "false"
// Pista: Puedes resolver esto usando `Math.floor`
const esEntero = (numero) => numero == Math.floor(numero);
console.log(esEntero(11), esEntero(1.1));

// Si "numero" es divisible entre 3, devuelve "fizz"
// Si "numero" es divisible entre 5, devuelve "buzz"
// Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
// De lo contrario, devuelve el numero
const fizzBuzz = (numero) =>
  (numero % 3 == 0) & (numero % 5 == 0)
    ? "fizzbuzz"
    : numero % 3 == 0
    ? "fizz"
    : numero % 5 == 0
    ? "buzz"
    : numero;
console.log(fizzBuzz(15));

//La función recibe tres números distintos.
//Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
//Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
//Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
//0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
//Si no se cumplen ninguna de las condiciones anteriores, retornar false.
const operadoresLogicos = (num1, num2, num3) =>
  num1 > num2 && num1 > num3 && num1 > 0
    ? "numero 1 es mayor y positivo"
    : num1 < 0 || num2 < 0 || num3 < 0
    ? "Hay negativos"
    : (num3 > num1) & (num3 > num2)
    ? ++num3
    : num1 == 0 || num2 == 0 || num3 == 0
    ? "Error"
    : false;
console.log(operadoresLogicos(1, 1, 10));

// Devuelve "true" si "numero" es primo
// De lo contrario devuelve "falso"
// Pista: un número primo solo es divisible por sí mismo y por 1
// Pista 2: Puedes resolverlo usando un bucle `for`
// Nota: Los números 0 y 1 NO son considerados números primos
const esPrimo = (num) => {
  let control = num - 1;
  let esPrimo = true;
  for (let i = num; i > 2; i--) {
    if (num % control == 0) {
      esPrimo = false;
    }
    control--;
  }
  if (num == 0 || num == 1) {
    esPrimo = false;
  }
  return esPrimo;
};
console.log(esPrimo(7));

// Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
// si su valor es true y “Soy falso” si su valor es false.
const esVerdadero = (valor) => (valor ? "Soy verdadero" : "Soy falso");
console.log(esVerdadero(true), esVerdadero(false));

// Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
// La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
const tablaDelSeis = () => {
  let tabla = [];
  for (let i = 1; i <= 10; i++) {
    tabla.push(6 * i);
  }
  return tabla;
};
console.log(tablaDelSeis());

// Leer un número entero y determinar si tiene 3 dígitos.
const tieneTresDigitos = (num) => num % 1 == 0 && num > 99 && num < 1000;
console.log(
  tieneTresDigitos(99),
  tieneTresDigitos(100),
  tieneTresDigitos(999),
  tieneTresDigitos(1000)
);

// Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
// Retornar el valor final. Usar el bucle do ... while.
const doWhile = (num) => {
  let i = 0;
  do {
    i++;
    num += 5;
  } while (i < 8);
  return num;
};
console.log(doWhile(100));
