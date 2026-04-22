# Utilizamos la imagen oficial de Node.js en su versión alpine (ligera)
FROM node:alpine

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos el package.json e instalamos dependencias
COPY package.json .
RUN npm install

# Copiamos el script al directorio de trabajo
COPY script.js .

# Exponemos el puerto 3000 para acceder a la API
EXPOSE 3000

# Ejecutamos el script con Node.js
CMD ["node", "script.js"]