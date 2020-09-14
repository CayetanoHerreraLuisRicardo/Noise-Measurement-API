/************ Manejo de rutas en nuestra API ************/
const router = require('express').Router();
/************ Importamos las diferentes rutas a manejar en nuestra API ************/
const loginRoute = require('./api/loginRoute');
router.use('/login', loginRoute);

const registroRoute = require('./api/registroRoute');
router.use('/registro', registroRoute);

const sucursalRoute = require('./api/sucursalRoute');
router.use('/sucursal', sucursalRoute);

const fuenteRoute = require('./api/fuenteRoute');
router.use('/fuente', fuenteRoute);

const receptorRoute = require('./api/receptorRoute');
router.use('/receptor', receptorRoute);

const imagen1Route = require('./api/imagen1Route');
router.use('/imagen1', imagen1Route);

const formulaRoute = require('./api/formulaRoute');
router.use('/formula', formulaRoute);

const barreraRoute = require('./api/barreraRoute');
router.use('/barrera', barreraRoute);

const interseccionRoute = require('./api/interseccionRoute');
router.use('/interseccion', interseccionRoute);

const predefinidoRoute = require('./api/predefinidoRoute');
router.use('/predefinidos', predefinidoRoute);

const proyectoRoute = require('./api/proyectoRoute');
router.use('/proyecto', proyectoRoute);

const planoRoute = require('./api/planoRoute');
router.use('/plano', planoRoute);

const recoveryRoute = require('./api/recoveryRoute');
router.use('/recovery', recoveryRoute);

const resetRoute = require('./api/resetRoute');
router.use('/reset', resetRoute);

const accountRoute = require('./api/accountRoute');
router.use('/account', accountRoute);

module.exports = router;