# Utilizamos la imagen oficial de Node.js en su versión alpine (ligera)
FROM node:alpine

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos e instalamos dependencias
COPY package.json .
RUN npm install

# Copiamos el script
COPY script.js .

# Exponemos el puerto
EXPOSE 3000

# Ejecutamos el script
CMD ["node", "script.js"]