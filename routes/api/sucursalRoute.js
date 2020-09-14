/************ Uris dentro de '/api/sucursal' ************/
const router = require('express').Router();
const SucursalController = require('../../controllers/sucursalController');
const middleware = require('../../middlewares/validatorMiddleware');
let controller = new SucursalController();
router.route('/').post(middleware.validate, controller.create);
module.exports = router;