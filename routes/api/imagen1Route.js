/************ Uris dentro de '/api/imagen1' ************/
const router = require('express').Router();
const Imagen1Controller = require('../../controllers/imagen1Controller');
const middleware = require('../../middlewares/validatorMiddleware');
let controller = new Imagen1Controller();
router.route('/').post(middleware.validate, controller.create);
router.route('/').put(middleware.validate, controller.update);
router.route('/:idImagen').delete(middleware.validate, controller.delete);
router.route('/:idImagen').get(middleware.validate, controller.get);
module.exports = router;