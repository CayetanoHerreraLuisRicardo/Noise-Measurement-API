/********** Importamos el módulo 'express' usado para crear nuestra API **********/
const express = require('express');
/********** Importamos el módulo 'body-parser' para analizar los cuerpos en cada solicitud o  request **********/
const parser = require('body-parser');
/********** Importamos el módulo 'path' para trabajar con archivos y ruta de directorios **********/
const path = require('path');
/********** Importamos el módulo path para trabajar con archivos y ruta de directorios **********/
require('dotenv').config();
/********** Creamos nuestra app Express **********/
const app = express();
/********** Definimos el puerto donde va a correr nuestra app **********/
const port = process.env.PORT || '3000';
/********** Middleware para exponer archivos de la carpeta /public del proyecto mediante el prefijo de vía de acceso con el mismo nombre /public. **********/
app.use(process.env.APP_API_PUBLIC_URL, express.static(__dirname + process.env.APP_API_PUBLIC_URL));
/********** Importamos todas las rutas **********/
const apiRouter = require('./routes/api');
/********** Cuerpo de solicitud json **********/
app.use(parser.json({limit: '500mb'}));
/********** Cuerpo de solicitud urlencoded **********/
app.use(parser.urlencoded({limit: '500mb', extended: false}));
/********** Ruta raiz de la API **********/
app.get('/', (req, res) => {
	res.send('Bienvenidos a Noise Measurement API');
});
/********** Rutas de nuestra API **********/
app.use('/api',apiRouter);
/********** Nuestra app esta lista para escuchar conexiones en http://localhost en el puerto seleccionado **********/
app.listen(port, () => {
	console.log(`Api corriendo en  http://localhost:${port}`);
});