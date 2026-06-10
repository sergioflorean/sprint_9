console.log("Hello, World! This is a simple JavaScript file.");
console.log(1);

setTimeout(() => {
  console.log(2);
  setTimeout(() => {
    console.log(3);
  }, 0);
}, 1000);

console.log(4);
