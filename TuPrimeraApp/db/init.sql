CREATE DATABASE IF NOT EXISTS agenda;

USE agenda;

CREATE TABLE IF NOT EXISTS contactos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    telefono VARCHAR(20),
    email VARCHAR(100)
);

INSERT INTO contactos (nombre, telefono, email) VALUES
    ('Juan Pérez', '555-1234', 'juan@email.com'),
    ('María García', '555-5678', 'maria@email.com'),
    ('Carlos López', '555-9012', 'carlos@email.com');