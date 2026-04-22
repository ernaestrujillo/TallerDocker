const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/hola" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ mensaje: "¡Hola desde docker!" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Endpoint no encontrado" }));
  }
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});