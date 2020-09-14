/************ Uris dentro de '/api/plano' ************/
const router = require('express').Router();
const PlanoController = require('../../controllers/planoController');
const middleware = require('../../middlewares/validatorMiddleware');
let controller = new PlanoController();
router.route('/usuario/:idusuario').get(middleware.validate, controller.getByUserOrFuente);
router.route('/usuario').post(middleware.validate, controller.action);
// QUEDA PENDIENTE Obtener Data Completa desde Fuente => plano/fuente/{idFuente}
router.route('/fuente/:idFuente').get(middleware.validate, controller.getByUserOrFuente);

module.exports = router;