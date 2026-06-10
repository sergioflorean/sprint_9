// Has llegado al nivel más moderno de sintaxis para escribir código asíncrono.

// Aunque las cadenas de .then() funcionan bien, a veces pueden ser difíciles de seguir. La sintaxis async / await nos permite escribir código asíncrono que se lee casi igual que el código síncrono (el que se ejecuta línea por línea).

// Tu tarea es crear la función asíncrona llamada setupGallery para gestionar la carga de las imágenes. Dentro de la función, carga tres imágenes de perros una tras otra. Justo después de recibir cada imagen, añádela al document.body.

// Al final del archivo, asegúrate de llamar a la función.

//Asegúrate de añadir cada imagen al document.body inmediatamente después de su respectivo await.


// Tu código actual funciona de maravilla siempre que las imágenes se carguen correctamente. Pero, ¿qué pasa si una URL se rompe? Si una promesa falla dentro de una función async y no la controlamos, nuestro programa podría detenerse bruscamente.

// Modifica la función setupGallery utilizando una estructura try...catch. Si ocurre un error durante la carga de cualquier imagen, el bloque catch debe mostrar en la consola el mensaje exacto: "Imagen no cargada. ERROR! ERROR!".
function loadImage(imageUrl: string): Promise<Event> {
  return new Promise((resolve, reject) => {
    const image: HTMLImageElement = document.createElement("img");
    image.src = imageUrl;
    image.onerror = reject;
    image.onload = resolve;
  });
}

// Crea la función asíncrona setupGallery y carga las 3 imágenes
// Perro 1: https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg
// Perro 2: https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-2.jpg
// Perro 3: https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-3.jpg

const setupGallery = async () => {

    try {
  const event1 = await loadImage(
    "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg",
  );
  document.body.append(event1.target as HTMLImageElement);

  const event2 = await loadImage(
    "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-2.jpg",
  );
  document.body.append(event2.target as HTMLImageElement);

  const event3 = await loadImage(
    "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-3.jpg",
  );
  document.body.append(event3.target as HTMLImageElement);
} catch {
  console.log("Imagen no cargada. ERROR! ERROR!");
}   
};

setupGallery();