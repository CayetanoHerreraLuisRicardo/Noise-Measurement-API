/************ Uris dentro de '/api/reset' ************/
const router = require('express').Router();
const AccessController = require('../../controllers/accessController');
const tokenMiddleware = require('../../middlewares/tokenMiddleware');
const middleware = require('../../middlewares/validatorMiddleware');
let controller = new AccessController();
router.route('/').post(tokenMiddleware.verifyToken, middleware.validate, controller.resetPassword);
module.exports = router;