# Utilizamos la imagen oficial de Python
FROM python:alpine

# Establecemos el directorio de trabajo
WORKDIR /app

# Desactiva el buffer de Python para ver logs en tiempo real
ENV PYTHONUNBUFFERED=1

# Copiamos el script de Python al directorio de trabajo
COPY script.py .

# Ejecutamos el script de Python
CMD ["python", "script.py"]