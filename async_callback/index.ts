function handleImageLoad(event: Event): void {
  const img = event.target as HTMLImageElement;
  document.body.append(img);
}

function handleLoadError(event: string | Event): void {
  console.log("La imagen no cargó. ¡ERROR! ¡ERROR!", event);
}

function loadImage(
  imageUrl: string,
  loadCallback: (this: GlobalEventHandlers, ev: Event) => void,
  errorCallback: OnErrorEventHandler,
): void {
  const img = document.createElement("img");
  img.src = imageUrl;
  img.onload = loadCallback;
  img.onerror = errorCallback;
}
loadImage(
  "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg",
  handleImageLoad,
  handleLoadError,
);
