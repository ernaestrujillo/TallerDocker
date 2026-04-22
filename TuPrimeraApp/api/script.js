import { Hono } from "hono";
import { serve } from "@hono/node-server";
import mysql from "mysql2/promise";

const app = new Hono();

const pool = mysql.createPool({
    host:     process.env.DB_HOST     || "db_maria",
    user:     process.env.DB_USER     || "root",
    password: process.env.DB_PASSWORD || "123456",
    database: process.env.DB_NAME     || "agenda",
    port:     process.env.DB_PORT     || 3306
});

// Listar contactos
app.get("/contactos", async (c) => {
    const [rows] = await pool.query("SELECT * FROM contactos");
    return c.json(rows);
});

// Obtener un contacto
app.get("/contactos/:id", async (c) => {
    const id = c.req.param("id");
    const [rows] = await pool.query("SELECT * FROM contactos WHERE id = ?", [id]);
    if (rows.length === 0) return c.json({ error: "Contacto no encontrado" }, 404);
    return c.json(rows[0]);
});

// Crear contacto
app.post("/contactos", async (c) => {
    const { nombre, telefono, email } = await c.req.json();
    const [result] = await pool.query(
        "INSERT INTO contactos (nombre, telefono, email) VALUES (?, ?, ?)",
        [nombre, telefono, email]
    );
    return c.json({ id: result.insertId, nombre, telefono, email }, 201);
});

// Actualizar contacto
app.put("/contactos/:id", async (c) => {
    const id = c.req.param("id");
    const { nombre, telefono, email } = await c.req.json();
    await pool.query(
        "UPDATE contactos SET nombre = ?, telefono = ?, email = ? WHERE id = ?",
        [nombre, telefono, email, id]
    );
    return c.json({ id, nombre, telefono, email });
});

// Eliminar contacto
app.delete("/contactos/:id", async (c) => {
    const id = c.req.param("id");
    await pool.query("DELETE FROM contactos WHERE id = ?", [id]);
    return c.json({ mensaje: "Contacto eliminado" });
});

serve({ fetch: app.fetch, port: 3000 }, () =>
    console.log("Servidor en http://localhost:3000")
);