/********** importamos los modelos de las tablas **********/
const { proyectos } = require('../config/db');

class ProyectoController {
    constructor() { }
    async getByUser(req, res, next) {
        try {
            const proyectos1 = await proyectos.findAll({
                where: {
                    idUsers: req.params.idusuario
                },
                attributes: [['idproyectos', 'idProyecto'], ['nombre', 'nombre_del_proyecto']]
            });
            res.send([proyectos1]);
        } catch (e) {
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }
}
module.exports = ProyectoController;