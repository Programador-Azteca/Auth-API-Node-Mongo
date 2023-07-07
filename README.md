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

Para registrar un nuevo usuario, envía una solicitud POST a `/api/auth/register` con el siguiente cuerpo JSON:

```json
{
  "email": "usuario@ejemplo.com",
  "password": "contraseña"
}
