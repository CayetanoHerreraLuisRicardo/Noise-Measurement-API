/********** importamos los modelos de las tablas **********/
const { formula } = require('../config/db');

class FormulaController {
    constructor() { }
    async get(req, res, next) {
        try {
            const oFormula = await formula.findByPk(req.params.idFormula);
            res.send([{ success: true, response: oFormula }]);
        } catch (e) {
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }
    async getAll(req, res, next) {
        try {
            const formulas = await formula.findAll();
            console.log(formulas);
            res.send([{ success: true, response: formulas }]);
        } catch (e) {
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }
}
module.exports = FormulaController;