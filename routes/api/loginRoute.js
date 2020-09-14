/************ Uris dentro de '/api/login' ************/
const router = require('express').Router();
const AccessController = require('../../controllers/accessController');
const middleware = require('../../middlewares/validatorMiddleware');
let controller = new AccessController();
router.route('/').post(middleware.validate, controller.login);
module.exports = router;