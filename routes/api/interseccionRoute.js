/************ Uris dentro de '/api/interseccion' ************/
const router = require('express').Router();
const InterseccionController = require('../../controllers/interseccionController');
const middleware = require('../../middlewares/validatorMiddleware');
let controller = new InterseccionController();
router.route('/:idBarrera').get(middleware.validate, controller.getByBarrera);
router.route('/').post(middleware.validate, controller.action);
router.route('/').put(middleware.validate, controller.update);
router.route('/:idPuntoInterseccionBarrera').delete(middleware.validate, controller.delete);
module.exports = router;