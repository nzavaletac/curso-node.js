const http = require("node:http");
const { findAvailablePort } = require("./10.free-port");

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("rrequest received");
  res.end("Hola mundo");
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(
      `server listening on port http://localhost:${server.address().port}`
    );
  });
});
