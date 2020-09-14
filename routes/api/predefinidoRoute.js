/************ Uris dentro de '/api/predefinidos' ************/
const router = require('express').Router();
const PredefinidoController = require('../../controllers/predefinidoController');
const middleware = require('../../middlewares/validatorMiddleware');
let controller = new PredefinidoController();
router.route('/all').get(middleware.validate, controller.getAll);
module.exports = router;