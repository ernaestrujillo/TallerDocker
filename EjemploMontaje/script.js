import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { readdir, readFile } from "fs/promises";
import { join } from "path";

const app = new Hono();
const CARPETA = "/datos";

// Lista todos los archivos del volumen
app.get("/archivos", async (c) => {
    const archivos = await readdir(CARPETA);
    return c.json({ archivos });
});

// Lee el contenido de un archivo específico
app.get("/archivos/:nombre", async (c) => {
    const nombre = c.req.param("nombre");
    const contenido = await readFile(join(CARPETA, nombre), "utf-8");
    return c.json({ nombre, contenido });
});

serve({ fetch: app.fetch, port: 3000 }, () =>
    console.log("Servidor en http://localhost:3000")
);