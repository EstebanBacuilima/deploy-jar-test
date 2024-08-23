# Usa una imagen base adecuada para servir tu aplicación compilada.
FROM nginx:alpine

# Copia el contenido del directorio dist al directorio de nginx
COPY dist/edbp-quiz-app/ /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]
