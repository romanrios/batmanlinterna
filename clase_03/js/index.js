// Destructuring

let seleccion = ["Messi", "De Paul", "Banini"];

// Sin destructring
let sinDestructuring = seleccion[2];
console.log(sinDestructuring);

// Con destructuring
let [leo, rodrigo, estefania] = seleccion;
console.log(leo, rodrigo, estefania);

// Destructuring objetos
let auto = {
  marca: "Ssanyoung",
  modelo: "Musso",
  anio: 2000,
};

// Sin destructuring
let miModelo = auto.modelo;
console.log(miModelo);

// Con destructuring
// Reasignación miMarca
let { marca: miMarca, modelo, anio } = auto;
console.log(miMarca, modelo, anio);
// Tanto arrays como objetos no de modigican, sino que se copia su informacion a nuevas variables

// Spread operator
// Array
let rocky = ["Rocky", "Rocky II", "Rocky III"];
let creed = ["Creed", "Creed 2"];

let peliculasBox = [...creed, ...rocky];

console.log(peliculasBox);

// Objetos

let generoAventura = {
  nombreGenero: "Aventura",
  popularidad: 10,
};

let volverAlFuturo = {
  titulo: "Volver al Futuro",
  ranking: 1,
  ...generoAventura,
};

let volverAlFuturoDos = {
  ...volverAlFuturo,
  anio: 1985,
};

console.log(volverAlFuturoDos);

// ASYNC AWAIT

let getNAmeAsync = async (postNumber) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await response.json();

    const postId = data[postNumber - 1].userId;

    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/users/"
    );
    const data2 = await response2.json();

    console.log(data2[postId - 1]);
  } catch (error) {
    console.log(error);
  }
};

getNAmeAsync(49);
