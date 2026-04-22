# ---- Etapa 1: compilar ----
FROM maven:3.9-eclipse-temurin-21-alpine AS builder

WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline

COPY Main.java src/main/java/Main.java
RUN mvn package -q

# ---- Etapa 2: ejecutar ----
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app
COPY --from=builder /app/target/hola-docker-1.0.jar app.jar

EXPOSE 3000
CMD ["java", "-jar", "app.jar"]