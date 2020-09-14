/************ Uris dentro de '/api/receptor' ************/
const router = require('express').Router();
const ReceptorController = require('../../controllers/receptorController');
const middleware = require('../../middlewares/validatorMiddleware');
let controller = new ReceptorController();
router.route('/').post(middleware.validate, controller.action);
module.exports = router;