/************ Uris dentro de '/api/fuente' ************/
const router = require('express').Router();
const FuenteController = require('../../controllers/fuenteController');
const middleware = require('../../middlewares/validatorMiddleware');
let controller = new FuenteController();
router.route('/').post(middleware.validate, controller.action);
module.exports = router;