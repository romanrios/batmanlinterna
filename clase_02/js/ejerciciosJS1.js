// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "lo que quieras";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 123;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// "Return" la string provista: str
const devolverString = (str) => str;
console.log(devolverString("Cadena de texto"));

// Devuelve la suma de x y
const suma = (x, y) => x + y;
console.log(suma(10, 10));

// Devuelve la resta de x y
const resta = (x, y) => x - y;
console.log(resta(10, 8));

// Devuelve la multiplicación de x y
const multiplica = (x, y) => x * y;
console.log(multiplica(10, 8));

// Devuelve la división de x y
const divide = (x, y) => x / y;
console.log(divide(10, 5));

// Devuelve "true" si x es igual a y
// De lo contrario, devuelve "false"
const sonIguales = (x, y) => x === y;
console.log(sonIguales("perro", "perro"), sonIguales("50", 50));

// Devuelve "true" si las dos strings tienen la misma longitud
// De lo contrario, devuelve "false"
const tienenMismaLongitud = (str1, str2) => str1.length === str2.length;
console.log(tienenMismaLongitud("sapo", "PEPE"));

// Devuelve "true" si el argumento de la función "num" es menor que noventa
// De lo contrario, devuelve "false"
const menosQueNoventa = (num) => num < 90;
console.log(menosQueNoventa(89), menosQueNoventa(90));

// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
// De lo contrario, devuelve "false"
const mayorQueCincuenta = (num) => num > 50;
console.log(mayorQueCincuenta(50), mayorQueCincuenta(51));

// Obten el resto de la división de "x" entre "y"
const obtenerResto = (x, y) => x % y;
console.log(obtenerResto(10, 4));

// Devuelve "true" si "num" es par
// De lo contrario, devuelve "false"
const esPar = (num) => num % 2 == 0;
console.log(esPar(0), esPar(1), esPar(2));

// Devuelve "true" si "num" es impar
// De lo contrario, devuelve "false"
const esImpar = (num) => num % 2 != 0;
console.log(esImpar(0), esImpar(1), esImpar(2));

// Devuelve el valor de "num" elevado al cuadrado
// ojo: No es raiz cuadrada!
const elevarAlCuadrado = (num) => num ** 2;
console.log(elevarAlCuadrado(5));

Math.po;

// Devuelve el valor de "num" elevado al cubo
const elevarAlCubo = (num) => num ** 3;
console.log(elevarAlCubo(5));

// Devuelve el valor de "num" elevado al exponente dado en "exponent"
const elevar = (num, exponent) => num ** exponent;
console.log(elevar(2, 3));

// Redondea "num" al entero más próximo y devuélvelo
const redondearNumero = (num) => Math.round(num);
console.log(redondearNumero(5.4), redondearNumero(5.5), redondearNumero(5.6));

// Redondea "num" hacia arriba (al próximo entero) y devuélvelo
const redondearHaciaArriba = (num) => Math.ceil(num);
console.log(redondearHaciaArriba(5.5));

//Generar un número al azar entre 0 y 1 y devolverlo
//Pista: investigá qué hace el método Math.random()
const numeroRandom = () => Math.random();
console.log(numeroRandom());

//La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
//Si el número es positivo, devolver ---> "Es positivo"
//Si el número es negativo, devolver ---> "Es negativo"
//Si el número es 0, devuelve false
const esPositivo = (num) =>
  num > 0 ? "Es positivo" : num < 0 ? "Es negativo" : false;
console.log(esPositivo(1), esPositivo(-1), esPositivo(0));

// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
// Ejemplo: "hello world" pasaría a ser "hello world!"
const agregarSimboloExclamacion = (str) => "¡" + str + "!";
console.log(agregarSimboloExclamacion("Hola mundo"));

// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
// Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
const combinarNombres = (nombre, apellido) => `${nombre} ${apellido}`;
console.log(combinarNombres("Román", "Ríos"));

// Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
// "Martin" -> "Hola Martin!"
const obtenerSaludo = (nombre) => `¡Hola ${nombre}!`;
console.log(obtenerSaludo("Román"));

// Retornar el area de un cuadrado teniendo su altura y ancho
const obtenerAreaRectangulo = (alto, ancho) => alto * ancho;
console.log(obtenerAreaRectangulo(2, 4));

//Escribe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
const retornarPerimetro = (lado) => lado * 4;
console.log(retornarPerimetro(5));

//Desarrolle una función que calcule el área de un triángulo.
const areaDelTriangulo = (base, altura) => (base * altura) / 2;
console.log(areaDelTriangulo(3, 5));

//Supongamos que 1 euro equivale a 1.20 dólares.
//Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
const deEuroAdolar = (euro) => (euro * 1.2).toFixed(2);
const programa = () => {
  try {
    let euros;
    let datoIncorrecto;
    do {
      euros = prompt("Ingrese un número en euros para convertirlos a dólares");
      datoIncorrecto = isNaN(euros) || euros === "";
      alert(
        datoIncorrecto
          ? "Dato incorrecto"
          : `${euros} euros equivalen a ${deEuroAdolar(Number(euros))} dólares`
      );
    } while (datoIncorrecto);
  } catch (error) {
    console.log(error);
  }
};
programa();
// try catch utilizado para mantener funcionado Quokka

//Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
//Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle
//que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
//si ingresa una consonante muestre en pantalla dato incorrecto
const esVocal = () => {
  try {
    let letra;
    let datoIncorrecto;
    do {
      letra = prompt("Ingrese una letra para determinar si es vocal");
      datoIncorrecto = letra.length !== 1 || !isNaN(letra);
      alert(
        datoIncorrecto
          ? "Dato incorrecto"
          : "aeiou".includes(letra)
          ? "Es vocal"
          : "No es vocal"
      );
    } while (datoIncorrecto);
  } catch (error) {
    console.log(error);
  }
};
esVocal();
