# API de Autenticación con Node.js, TypeScript y MongoDB

Esta API permite el registro de usuarios, inicio de sesión y restablecimiento de contraseña.

## Configuración

Para configurar el proyecto, asegúrate de tener instalado Node.js y MongoDB en tu máquina. Luego sigue estos pasos:

1. Clona este repositorio a tu máquina local.
2. Navega al directorio del proyecto y ejecuta `npm install` para instalar todas las dependencias necesarias.
3. Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables de entorno:

    ```
    PORT=3000
    DB_URI=mongodb://localhost:27017/example-mongo
    JWT_SECRET=TuClaveSecretaParaJWT
    ```

4. Inicia el servidor con `npm start`. 

## Uso

### Registro de usuario

Para registrar un nuevo usuario, envía una solicitud POST a `/api/auth/register`. Esta ruta espera un objeto JSON en el cuerpo de la solicitud con los siguientes campos:

- `email` (requerido): El correo electrónico del usuario.
- `password` (requerido): La contraseña del usuario.

Ejemplo de solicitud:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"email": "usuario@ejemplo.com", "password": "contraseña"}' http://localhost:3000/api/auth/register


### Inicio de sesión

Para iniciar sesión, envía una solicitud POST a `/api/auth/login`. Esta ruta espera un objeto JSON en el cuerpo de la solicitud con los siguientes campos:

- `email` (requerido): El correo electrónico del usuario.
- `password` (requerido): La contraseña del usuario.

Ejemplo de solicitud:

```bash
curl -X POST -H "Content-Type: application/json" -d '{"email": "usuario@ejemplo.com", "password": "contraseña"}' http://localhost:3000/api/auth/login

### Restablecimiento de contraseña

Para restablecer la contraseña, envía una solicitud POST a `/api/auth/resetPassword`. Esta es una ruta protegida, por lo que deberás incluir el token JWT obtenido al iniciar sesión en el encabezado `Authorization` de la solicitud. Esta ruta espera un objeto JSON en el cuerpo de la solicitud con el siguiente campo:

- `password` (requerido): La nueva contraseña del usuario.

Ejemplo de solicitud:

```bash
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer <TuToken>" -d '{"password": "nuevaContraseña"}' http://localhost:3000/api/auth/resetPassword
````

# Docker

Este proyecto usa MongoDB como base de datos. Puedes levantar fácilmente un servidor MongoDB local utilizando Docker. Si no tienes Docker instalado en tu máquina, puedes descargarlo desde [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop).

Una vez instalado Docker, puedes usar el siguiente comando para iniciar un contenedor MongoDB:

```bash
docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=secret -e MONGO_INITDB_DATABASE=mongo-example --name mongodb mongo
````