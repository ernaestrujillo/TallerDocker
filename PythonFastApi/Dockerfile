# Utilizamos la imagen oficial de Python en su versión alpine (ligera)
FROM python:alpine

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos e instalamos las dependencias
COPY requirements.txt .
RUN pip install -r requirements.txt --no-cache-dir

# Copiamos el código al directorio de trabajo
COPY main.py .

# Exponemos el puerto 8000
EXPOSE 8000

# Ejecutamos la aplicación con uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]