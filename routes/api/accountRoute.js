/************ Uris dentro de '/api/confirm' ************/
const router = require('express').Router();
const AccessController = require('../../controllers/accessController');
const tokenMiddleware = require('../../middlewares/tokenMiddleware');
const middleware = require('../../middlewares/validatorMiddleware');
let controller = new AccessController();
router.route('/').get(tokenMiddleware.verifyToken, controller.verifyAccount);
module.exports = router;