function handleImageLoad(event) {
    const img = event.target;
    document.body.append(img);
}
function handleLoadError(event) {
    console.log("La imagen no cargó. ¡ERROR! ¡ERROR!", event);
}
function loadImage(imageUrl, loadCallback, errorCallback) {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.onload = loadCallback;
    img.onerror = errorCallback;
}
loadImage("https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg", handleImageLoad, handleLoadError);
export {};
