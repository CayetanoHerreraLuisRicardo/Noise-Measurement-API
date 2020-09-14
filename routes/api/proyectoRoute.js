/************ Uris dentro de '/api/proyecto' ************/
const router = require('express').Router();
const ProyectoController = require('../../controllers/proyectoController');
const middleware = require('../../middlewares/validatorMiddleware');
let controller = new ProyectoController();
router.route('/usuario/:idusuario').get(middleware.validate, controller.getByUser);
module.exports = router;