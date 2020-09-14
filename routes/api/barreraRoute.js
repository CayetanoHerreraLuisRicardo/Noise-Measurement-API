/************ Uris dentro de '/api/barrera' ************/
const router = require('express').Router();
const BarreraController = require('../../controllers/barreraController');
const middleware = require('../../middlewares/validatorMiddleware');
let controller = new BarreraController();
router.route('/').post(middleware.validate, controller.action);
router.route('/:idBarrera').delete(middleware.validate, controller.delete);
router.route('/all/:idFuente').get(middleware.validate, controller.getByFuente);
module.exports = router;