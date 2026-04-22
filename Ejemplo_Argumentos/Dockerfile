FROM alpine

# Declarar un argumento con un valor predeterminado
ARG NOMBRE="Mundo"

# Crear un archivo que contenga el mensaje personalizado
RUN echo "Hola $NOMBRE" > /message 

# Comando predeterminado para mostrar el contenido del archivo
CMD ["cat", "/message"]