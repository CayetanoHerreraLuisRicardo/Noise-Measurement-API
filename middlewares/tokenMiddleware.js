/********** importamos el módulo 'jsonwebtoken' como mecanismo para autenticarnos con la API por medio de tokens **********/
const jwt = require('jsonwebtoken');

/**
* @description Middleware usado en la mayoria de las Uris para validar token enviado por el cliente
*/
exports.verifyToken = (req, res, next) => {
    // Obtener el token de las cabeceras
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    // Mensaje de que debe mandar el token
    if (token == null) {
        return res.status(401).send({ success: false, number_error: 1, error: 'Acceso denegado' });
    }
    // Verificamos que el token sea válido
    jwt.verify(token, process.env.JWT_SECRET_KEY, (e, user) => {
        console.log(e);
        console.log(user);
        // hubo un error en el token
        if (e) {
            return res.status(403).send({ success: false, number_error: 2, error: e.message });
        }
        // si el token es correcto y tiene vigencia lo pasamos al controllador correspondiente
        next();
    });
}