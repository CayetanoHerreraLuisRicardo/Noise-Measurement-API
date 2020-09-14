/************ Uris dentro de '/api/formula' ************/
const router = require('express').Router();
const FormulaController = require('../../controllers/formulaController');
const tokenMiddleware = require('../../middlewares/tokenMiddleware');
const middleware = require('../../middlewares/validatorMiddleware');
let controller = new FormulaController();
router.route('/all').get(middleware.validate, controller.getAll);
router.route('/:idFormula').get(middleware.validate, controller.get);
module.exports = router;