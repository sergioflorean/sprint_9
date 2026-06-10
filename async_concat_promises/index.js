// En los ejercicios anteriores, creaste la función loadImage() que envuelve la carga de una imagen en una promise. Hasta ahora solo la hemos usado para cargar una imagen, pero ¿qué pasa si necesitamos cargar varias y queremos asegurarnos de que aparezcan en un orden exacto?
// Tu misión es utilizar esa función para cargar tres imágenes de perros en secuencia. La segunda imagen solo debe empezar a cargarse cuando la primera ya se haya añadido al documento, y la tercera solo cuando la segunda esté agregada.
// Perro 1: https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg
// Perro 2: https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-2.jpg
// Perro 3: https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-3.jpg
function loadImage(imageUrl) {
    return new Promise((resolve, reject) => {
        const image = document.createElement("img");
        image.src = imageUrl;
        image.onerror = reject;
        image.onload = resolve;
    });
}
// Carga las 3 imágenes en secuencia (dog-1, dog-2, dog-3)
loadImage("https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg")
    .then((event) => {
    document.body.append(event.target);
    return loadImage("https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-2.jpg");
})
    .then((event) => {
    document.body.append(event.target);
    return loadImage("https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-3.jpg");
})
    .then((event) => {
    document.body.append(event.target);
})
    .catch(() => {
    console.log("Imagen no cargada. ERROR! ERROR!");
});
export {};
