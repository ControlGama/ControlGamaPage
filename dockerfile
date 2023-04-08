FROM node:latest

# Crea un directorio de trabajo para la aplicación
WORKDIR /app

# Copia el archivo de configuración de la aplicación package.json y package-lock.json
COPY ["package*.json", "./"]

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY ["src", "./src"]
COPY ["public", "./public"]
COPY ["webpack*.js", "./"]
COPY [".babelrc", "./"]

# Construye la aplicación
RUN npm run build

# Instala el servidor web estático serve
RUN npm install -g serve

# Exponer el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Ejecutar el servidor web estático para servir la aplicación
CMD ["serve", "-s", "dist"]