const fs = require("node:fs");
// Sincrono
// console.log("Leyendo el primer archivo...");
// const text = fs.readFileSync("./archivo.txt", "utf-8");

// console.log(text);

console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log("Primer texto: ", text);
});

console.log("hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log("Segundo texto: ", text);
});
