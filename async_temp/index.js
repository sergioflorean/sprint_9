const showMessage = () => {
    console.log("¡Hola, mundo!");
};
console.log("uno");
console.log("dos");
setTimeout(showMessage, 5000);
console.log("tres");
// Imagina que estamos desarrollando una tienda en línea. Queremos premiar a los usuarios que se quedan leyendo la página principal dándoles un código de descuento secreto.
// Hemos preparado la función showPromoCode(), que imprime el regalo en la consola. Tu tarea es utilizar el método correcto para que esta función se ejecute exactamente 5 segundos (5000 milisegundos) después de que se lea el código.
function showPromoCode() {
    console.log("Tu cupón de descuento es: TYPESCRIPT25OFF");
}
// Escribe tu código debajo de esta línea:
setTimeout(showPromoCode, 5000);
// Hemos preparado una función llamada consoleDate() que registra la hora actual en la consola. Añade el código necesario para que esta función se ejecute y registre la hora en la consola cada segundo.
function consoleDate() {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
setInterval(consoleDate, 1000);
export {};
