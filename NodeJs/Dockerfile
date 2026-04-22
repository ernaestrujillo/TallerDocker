# Utilizamos la imagen oficial de Node.js en su versión alpine (ligera)
FROM node:alpine

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el script al directorio de trabajo
COPY script.js .

# Exponemos el puerto 3000 para acceder a la API
EXPOSE 3000

# Ejecutamos el script con Node.js
CMD ["node", "script.js"]