import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8"),
]).then(([text, seconText]) => {
  console.log("Primer texto: ", text);
  console.log("Segundo texto: ", seconText);
});

