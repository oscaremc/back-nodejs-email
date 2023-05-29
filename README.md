# NodeMailer Example

{
  "name": "back-nodejs-email",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon src/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "dotenv": "^16.0.3",
    "express": "^4.17.1"
  },
  "devDependencies": {
    "nodemailer": "^6.3.0",
    "nodemon": "^1.19.2"
  }
}

# Para una correcta respuesta se debe enviar desde el front

{
  name: name del formulario, 
  email: email del formulario, 
  message: message del formulario, 
  emailuser: Correo del hosting (remitente), 
  emailpass: Clave del hosting (remitente),
  emailto: Correo donde se quiere enviar
}