/************ Uris dentro de '/api/user' ************/
const router = require('express').Router();
const UserController = require('../../controllers/userController');
const middleware = require('../../middlewares/validatorMiddleware');
let controller = new UserController();
router.route('/').post(middleware.validate, controller.register);
router.route('/').put(middleware.validate, controller.update);
module.exports = router;