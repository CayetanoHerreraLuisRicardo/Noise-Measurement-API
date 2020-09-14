/************ Importamos el modulo 'express-validator' usando para validar el request ************/
const { body, validationResult } = require('express-validator');
/**
* @description Middleware usado en la mayoria de las Uris para validar el cuerpo de la solicitud enviada desde el cliente
*/
exports.validate = async (req, res, next) => {
    const uri = req.originalUrl;
    // Evaluamos a que uri estan haciendo el request
    switch (uri) {
        case '/api/login': {
            console.log('login');
            await body('email', 'el campo email es requerido').exists().run(req);
            await body('email', 'el campo email es inválido').isEmail().run(req);
            await body('password', 'el campo password es requerido').exists().run(req);
            break;
        }
        case '/api/registro': {
            if (req.method == 'PUT') {
                await body('id', 'el campo id es requerido').exists().run(req);
                await body('id', 'el campo id debe ser entero').isInt().run(req);
            }
            await body('name', 'el campo name es requerido').exists().run(req);
            await body('email', 'el campo email es requerido').exists().run(req);
            await body('email', 'el campo email es inválido').isEmail().run(req);
            await body('password', 'el campo password es requerido').exists().run(req);
            await body('isAdmin', 'el campo isAdmin es requerido').exists().run(req);
            await body('isAdmin', 'el campo isAdmin debe ser entero').isInt().run(req);
            break;
        }
        case '/api/sucursal': {
            await body('idEmpresa', 'el campo idEmpresa es requerido').exists().run(req);
            await body('idEmpresa', 'el campo idEmpresa debe ser entero').isInt().run(req);
            await body('proyecto', 'el campo proyecto es requerido').exists().run(req);
            break;
        }
        case '/api/fuente': {
            await body().isArray().run(req);
            await body('*.idSucursal', 'el campo idSucursal es requerido').exists().run(req);
            await body('*.idSucursal', 'el campo idSucursal debe ser entero').isInt().run(req);
            await body('*.idusuario', 'el campo idusuario es requerido').exists().run(req);
            await body('*.idusuario', 'el campo idusuario debe ser entero').isInt().run(req);
            await body('*.coord_norte', 'el campo coord_norte es requerido').exists().run(req);
            await body('*.coord_este', 'el campo coord_este es requerido').exists().run(req);
            await body('*.lugar', 'el campo lugar es requerido').exists().run(req);
            await body('*.nps', 'el campo nps es requerido').exists().run(req);
            await body('*.nps', 'el campo nps debe ser entero').isInt().run(req);
            await body('*.distancia_inicial', 'el campo distancia_inicial es requerido').exists().run(req);
            await body('*.distancia_inicial', 'el campo distancia_inicial debe ser entero').isInt().run(req);
            await body('*.limite_circunferencia', 'el campo limite_circunferencia es requerido').exists().run(req);
            await body('*.limite_circunferencia', 'el campo limite_circunferencia debe ser entero').isInt().run(req);
            await body('*.altura', 'el campo altura es requerido').exists().run(req);
            await body('*.altura', 'el campo altura debe ser entero').isInt().run(req);
            await body('*.estado', 'el campo estado es requerido').exists().run(req);
            await body('*.estado', 'el valor del campo estado no es válido').isIn(['new', 'update', 'delete']).run(req);
            break;
        }
        case '/api/receptor': {
            await body().isArray().run(req);
            await body('*.idFuente', 'el campo idFuente es requerido').exists().run(req);
            await body('*.idFuente', 'el campo idFuente debe ser entero').isInt().run(req);
            await body('*.nombre', 'el campo nombre es requerido').exists().run(req);
            await body('*.numeroreceptor', 'el campo numeroreceptor es requerido').exists().run(req);
            await body('*.calle', 'el campo calle es requerido').exists().run(req);
            await body('*.numero', 'el campo numero es requerido').exists().run(req);
            await body('*.comuna', 'el campo comuna es requerido').exists().run(req);
            await body('*.datum', 'el campo datum es requerido').exists().run(req);
            await body('*.huso', 'el campo huso es requerido').exists().run(req);
            await body('*.coord_norte', 'el campo coord_norte es requerido').exists().run(req);
            await body('*.coord_este', 'el campo coord_este es requerido').exists().run(req);
            await body('*.zona_emplazamiento', 'el campo zona_emplazamiento es requerido').exists().run(req);
            await body('*.zonidificacion', 'el campo zonidificacion es requerido').exists().run(req);
            await body('*.distancia_fuente', 'el campo distancia_fuente es requerido').exists().run(req);
            await body('*.distancia_circunferencia', 'el campo distancia_circunferencia es requerido').exists().run(req);
            await body('*.dBA', 'el campo dBA es requerido').exists().run(req);
            await body('*.altura', 'el campo altura es requerido').exists().run(req);
            await body('*.estado', 'el campo estado es requerido').exists().run(req);
            await body('*.estado', 'el valor del campo estado no es válido').isIn(['new', 'update', 'delete']).run(req);
            break;
        }
        case '/api/imagen1': {
            if (req.method === 'POST' || req.method === 'PUT') {
                await body().isArray().run(req);
                await body('*.idFuente', 'el campo idFuente es requerido').exists().run(req);
                await body('*.idFuente', 'el campo idFuente debe ser entero').isInt().run(req);
                await body('*.idReceptor', 'el campo idReceptor es requerido').exists().run(req);
                await body('*.idReceptor', 'el campo idReceptor debe ser entero').isInt().run(req);
                await body('*.imagen', 'el campo imagen es requerido').exists().run(req);
                await body('*.estado', 'el campo estado es requerido').exists().run(req);
                await body('*.estado', 'el valor del campo estado no es válido').isIn(['new', 'update', 'delete']).run(req);
            }
            if (req.method === 'PUT') {
                await body('*.idImagen', 'el campo idImagen es requerido').exists().run(req);
                await body('*.idImagen', 'el campo idImagen debe ser entero').isInt().run(req);
            }
            if (req.method === 'DELETE' || req.method === 'GET') {
                await param('idImagen', 'el campo idFuente es requerido').exists().run(req);
                await param('idImagen', 'el campo idFuente debe ser entero').isInt().run(req);
            }

            break;
        }
        case '/api/barrera': {
            if (req.method === 'POST' || req.method === 'PUT') {
                await body().isArray().run(req);
                await body('*.idFuente', 'el campo idFuente es requerido').exists().run(req);
                await body('*.idFuente', 'el campo idFuente debe ser entero').isInt().run(req);
                await body('*.coord_norte_inicio', 'el campo coord_norte_inicio es requerido').exists().run(req);
                await body('*.coord_este_inicio', 'el campo coord_este_inicio es requerido').exists().run(req);
                await body('*.coord_norte_fin', 'el campo coord_norte_fin es requerido').exists().run(req);
                await body('*.altura', 'el campo coord_este_fin es requerido').exists().run(req);
                await body('*.altura', 'el campo altura debe ser entero').isInt().run(req);
                await body('*.estado', 'el campo estado es requerido').exists().run(req);
                await body('*.estado', 'el valor del campo estado no es válido').isIn(['new', 'update', 'delete']).run(req);
            }
            break;
        }
        case '/api/interseccion': {
            if (req.method === 'POST' || req.method === 'PUT') {
                await body().isArray().run(req);
                await body('*.idBarrera', 'el campo idBarrera es requerido').exists().run(req);
                await body('*.idBarrera', 'el campo idBarrera debe ser entero').isInt().run(req);
                await body('*.idReceptor', 'el campo idReceptor es requerido').exists().run(req);
                await body('*.idReceptor', 'el campo idReceptor debe ser entero').isInt().run(req);
                await body('*.coord_norte', 'el campo coord_norte es requerido').exists().run(req);
                await body('*.coord_este', 'el campo coord_este es requerido').exists().run(req);
            }
            if (req.method === 'POST') {
                await body('*.estado', 'el campo estado es requerido').exists().run(req);
                await body('*.estado', 'el valor del campo estado no es válido').isIn(['new', 'update', 'delete']).run(req);
            }
            if (req.method === 'PUT') {
                await body('*.idPuntoInterseccionBarrera', 'el campo idPuntoInterseccionBarrera es requerido').exists().run(req);
                await body('*.idPuntoInterseccionBarrera', 'el campo idPuntoInterseccionBarrera debe ser entero').isInt().run(req);
            }
            break;
        }
        case '/api/recovery': {
            await body('email', 'el campo email es requerido').exists().run(req);
            await body('email', 'el campo email es inválido').isEmail().run(req);
            break;
        }
        case '/api/reset': {
            await body('password', 'el campo password es requerido').exists().run(req);
            break;
        }
        case '/api/account': {
            await body('email', 'el campo email es requerido').exists().run(req);
            await body('email', 'el campo email es inválido').isEmail().run(req);
            break;
        }
    }
    // En 'result' guardamos toda la lista campos invalidos segun lo especificado
    const result = validationResult(req);
    // Si 'result' tiene campos inválidos mandamos la respuesta con un codigo HTTP 400 con la lista de campos invalidos
    if (!result.isEmpty()) {
        return res.status(400).json({ success: false, number_error: 2, errors: result.array() });
    }
    // continuamos al controlador correspondiente
    else {
        next();
    }
}