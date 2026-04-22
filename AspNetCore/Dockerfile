# ---- Etapa 1: compilar ----
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS builder

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos el proyecto e instalamos dependencias
COPY HolaDocker.csproj .
RUN dotnet restore

# Copiamos el código y compilamos
COPY Program.cs .
RUN dotnet publish -c Release -o out

# ---- Etapa 2: ejecutar ----
FROM mcr.microsoft.com/dotnet/aspnet:8.0

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos el resultado de la compilación
COPY --from=builder /app/out .

# Exponemos el puerto
EXPOSE 8080

# Ejecutamos la aplicación
CMD ["dotnet", "HolaDocker.dll"]