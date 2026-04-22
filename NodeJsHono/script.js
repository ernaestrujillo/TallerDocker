import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/hola", (c) => {
  return c.json({ mensaje: "¡Hola desde Docker con Hono!" });
});

serve({ fetch: app.fetch, port: 3000 }, () =>
  console.log("Servidor en http://localhost:3000")
);