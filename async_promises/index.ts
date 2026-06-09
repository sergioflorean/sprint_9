// código que escribiste en los ejercicios de esa unidad.

// Convierte este código para que utilice una promise que cumpla con los siguientes requisitos:

// La función loadImage() debe tener un solo parámetro: imageUrl
// La función loadImage() debe devolver una promise
// El código para añadir una imagen al DOM se transfiere a then()
// La gestión de errores se transfiere al método catch() de la función loadImage()
// Las funciones handleImageLoad() y handleLoadError() ya no son necesarias y deberían eliminarse


function loadImage(imageUrl: string): Promise<Event> {
  return new Promise((resolve, reject) => {
    const image: HTMLImageElement = document.createElement("img");
    image.src = imageUrl;
    image.onerror = reject;
    image.onload = resolve;
  });
}

loadImage(
  "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg",
)
  .then((event: Event) => {
    const img = event.target as HTMLImageElement;
    document.body.append(img);
  })
  .catch(() => {
    console.log("Imagen no cargada. ERROR! ERROR!");
  });
