/********** importamos los modelos de las tablas **********/
const { valorespredefinidos } = require('../config/db');

class PredefinidoController {
    constructor() { }
    async getAll(req, res, next) {
        try {
            const predefinidos = await valorespredefinidos.findAll({
                attributes: ['idValoresPredefinidos', 'nps', ['distanciaInicial', 'distancia_inicial']]
            });
            res.send([{ success: true, response: predefinidos }]);
        } catch (e) {
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }
}
module.exports = PredefinidoController;