/********** importamos los modelos de las tablas **********/
const { sucursal } = require('../config/db');

class SucursalController {
    constructor() { }
    async create(req, res, next) {
        try {
            const oSucursal = await sucursal.findOne({
                where: {
                    nombreSucursal: req.body.proyecto
                }
            });
            if (oSucursal) {
                res.send([{ success: false, number_error: 2, error: `ya se encuentra una sucursal con el nombre ${req.body.proyecto}` }]);
            }
            else {
                const oNew = {
                    nombreSucursal: req.body.proyecto,
                    idEmpresa: req.body.idEmpresa,
                }
                sucursal.create(oNew).then((data) => {
                    res.send([{ success: true, idsucursal: data.idEmpresa }]);
                }).catch((e) => {
                    res.send([{ success: false, number_error: -1, error: e.message }]);
                });
            }
        }
        catch (e) {
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }
}

module.exports = SucursalController;