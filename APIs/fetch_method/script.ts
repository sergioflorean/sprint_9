// Utilizando el método fetch() y la sintaxis async / await, crea una función asíncrona llamada getCharacters() y haz una solicitud en https://swapi.info/api/people. A continuación muestra la respuesta en la consola.

// No olvides llamar a la función al final del archivo para que se ejecute.\

const getCharacters = async (): Promise<void> => {
  const res: Response = await fetch("https://swapi.info/api/people");
  console.log(res);
};

getCharacters();


//Crea una copia profunda (deep copy) del objeto user utilizando los métodos JSON.stringify() y JSON.parse().

const user = {
  name: "Paul",
  age: 30,
  hasDog: true,
  dog: {
    name: "Doge",
    age: 6
  }
};

const userDeepCopy = JSON.parse(JSON.stringify(user));

  console.log(user === userDeepCopy); // false
console.log(user.dog === userDeepCopy.dog); // false
console.log(user.name === userDeepCopy.name); // true
console.log(user.dog.name === userDeepCopy.dog.name); // true


// Tendrás que enviar una solicitud GET a la URL https://api.kanye.rest para obtener una cita.

// Envía una solicitud GET a la dirección especificada utilizando el método fetch() y la sintaxis async/await dentro de una función llamada getQuote():

// Obtén la respuesta del servidor.
// Convierte los datos a JSON con el método res.json(). Los datos recibidos deben tener el tipo { quote: string }.
// Envía los datos recibidos a la consola.

// La salida de la consola demuestra que se han recibido los datos. El objeto recibido solo contiene una propiedad quote, que almacena la cita. Debe insertarse en el elemento DOM adecuado.

// Debes completar lo siguiente:

// Al principio del archivo script.ts, declara una variable llamada quoteElement y asígnale un elemento con la clase .quote. Asegúrate de indicarle a TypeScript que este elemento es un HTMLElement para poder acceder a sus propiedades sin errores.
// // Dentro de la función getQuote(), sustituye el método console.log() por una expresión que inserte el texto citado en quoteElement.

// Mostrar repetidamente la misma cita aburrirá rápidamente a nuestros usuarios. Hagamos que la cita se actualice con cada clic del botón. Haz lo siguiente:

// Crea una variable llamada button и asígnale el elemento con la clase .header__btn. No olvides usar la aserción de tipo as HTMLElement.
// En lugar de llamar a la función getQuote() automáticamente al final del archivo, adjunta un controlador de clic al botón para que la función se ejecute cuando se haga clic.
const quoteElement: HTMLElement = document.querySelector(".quote") as HTMLElement;
const button: HTMLElement = document.querySelector(".header__btn") as HTMLElement;

const getQuote = async (): Promise<void> => {
  console.log("click funciona");

  const res: Response = await fetch("https://api.kanye.rest");
  const data: { quote: string } = await res.json();

  console.log(data);
  quoteElement.textContent = data.quote;
};

button.addEventListener("click", getQuote);




