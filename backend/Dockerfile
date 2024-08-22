# Usa una imagen base de OpenJDK para Spring Boot
FROM openjdk:17-alpine
# Copia el archivo JAR de la aplicación al contenedor
COPY ./java_app.jar ./app.jar
# Comando para iniciar la aplicación, usando las variables de entorno
ENTRYPOINT ["java", "-jar", "/app.jar"]
