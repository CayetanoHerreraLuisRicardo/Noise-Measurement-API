/********** importamos los modelos de las tablas **********/
const { interseccion, sequelize } = require('../config/db');

class BarreraController {
    constructor() { }
    async getByBarrera(req, res, next) {
        try {
            const oBntersecciones = await interseccion.findAll({
                where: {
                    idBarrera: req.params.idBarrera
                }, attributes: ['idPuntoInterseccionBarrera', 'idBarrera', 'idReceptor', ['coordNorte', 'coord_norte'], ['coordEste', 'coord_este']]
            });
            res.send([{ success: true, response: oBntersecciones }]);
        } catch (e) {
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }
    async action(req, res, next) {
        let intersecciones = req.body;
        let newIntersecciones = [];
        let updateIntersecciones = [];

        let arrayResponse = [];
        const t = await sequelize.transaction();
        try {
            for (var i = 0; i < intersecciones.length; i++) {
                switch (intersecciones[i].estado) {
                    case 'new': {
                        const o = {
                            idBarrera: intersecciones[i].idBarrera,
                            idReceptor: intersecciones[i].idReceptor,
                            coordNorte: intersecciones[i].coord_norte,
                            coordEste: intersecciones[i].coord_este,
                        }
                        newIntersecciones.push(o);
                        break;
                    }
                    case 'update': {
                        console.log('case update1')
                        if (intersecciones[i].idPuntoInterseccionBarrera) {
                            const o = {
                                idPuntoInterseccionBarrera: intersecciones[i].idPuntoInterseccionBarrera,
                                idBarrera: intersecciones[i].idBarrera,
                                idReceptor: intersecciones[i].idReceptor,
                                coordNorte: intersecciones[i].coord_norte,
                                coordEste: intersecciones[i].coord_este,
                            }
                            updateIntersecciones.push(o);
                        }
                        break;
                    }
                }
            }

            console.log(newIntersecciones);
            if (newIntersecciones.length > 0) {
                const interseccionesCreated = await interseccion.bulkCreate(newIntersecciones, { transaction: t });
                if (interseccionesCreated.length > 0) {
                    console.log(interseccionesCreated);
                    interseccionesCreated.forEach((item, i) => {
                        arrayResponse.push({ idPuntoInterseccionBarrera: item.idPuntoInterseccionBarrera, idBarrera: item.idBarrera, idReceptor: item.idReceptor, estado: 'created' });
                    })
                }
            }
            console.log('case update2');
            console.log(updateIntersecciones);
            if (updateIntersecciones.length > 0) {
                console.log('case update 3')
                const barrerasToUpdate = updateIntersecciones.map(async (interseccionToUpdate) => {
                    return await interseccion.update(interseccionToUpdate, { where: { idPuntoInterseccionBarrera: interseccionToUpdate.idPuntoInterseccionBarrera }, transaction: t });
                });
                console.log('case update 4')
                console.log(barrerasToUpdate);
                await Promise.all(barrerasToUpdate).then((item) => {
                    console.log(item);
                    for (var i = 0; i < updateIntersecciones.length; i++) {
                        if (item[i][0] === 1) {
                            arrayResponse.push({ idPuntoInterseccionBarrera: updateIntersecciones[i].idPuntoInterseccionBarrera, idBarrera: updateIntersecciones[i].idBarrera, idReceptor: updateIntersecciones[i].idReceptor, estado: 'modified' });
                        }
                    }
                });
            }
            await t.commit();
            res.send([{ success: true, response: arrayResponse }]);
        } catch (e) {
            await t.rollback();
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }
    async update(req, res, next) {
        let intersecciones = req.body;
        let updateIntersecciones = [];

        let arrayResponse = [];
        const t = await sequelize.transaction();
        try {
            for (var i = 0; i < intersecciones.length; i++) {
                switch (intersecciones[i].estado) {
                    case 'update': {
                        console.log('case update1')
                        if (intersecciones[i].idBarrera) {
                            const o = {
                                idPuntoInterseccionBarrera: intersecciones[i].idPuntoInterseccionBarrera,
                                idBarrera: intersecciones[i].idBarrera,
                                idReceptor: intersecciones[i].idReceptor,
                                coordNorte: intersecciones[i].coord_norte,
                                coordEste: intersecciones[i].coord_este,
                            }
                            updateIntersecciones.push(o);
                        }
                        break;
                    }
                }
            }

            console.log('case update2');
            console.log(updateIntersecciones);
            if (updateIntersecciones.length > 0) {
                /*                 updateIntersecciones.forEach((item, index) => {
                                    arrayResponse.push({ idPuntoInterseccionBarrera: item.idPuntoInterseccionBarrera, idBarrera: item.idBarrera, idReceptor: item.idReceptor});
                                }) */
                console.log('case update 3')
                const barrerasToUpdate = updateIntersecciones.map(async (interseccionToUpdate) => {
                    return await interseccion.update(interseccionToUpdate, { where: { idPuntoInterseccionBarrera: interseccionToUpdate.idPuntoInterseccionBarrera }, transaction: t });
                });
                console.log('case update 4')
                await Promise.all(barrerasToUpdate).then((item) => {
                    console.log(item);
                    for (var i = 0; i < updateIntersecciones.length; i++) {
                        if (item[i][0] === 1) {
                            arrayResponse.push({ idPuntoInterseccionBarrera: updateIntersecciones[i].idPuntoInterseccionBarrera, idBarrera: updateIntersecciones[i].idBarrera, idReceptor: updateIntersecciones[i].idReceptor });
                        }
                    }
                });
            }
            await t.commit();
            res.send([{ success: true, response: arrayResponse }]);
        } catch (e) {
            await t.rollback();
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }
    async delete(req, res, next) {
        const id = req.params.idPuntoInterseccionBarrera;
        try {
            const interseccionDeleted = await interseccion.destroy({
                where: {
                    idPuntoInterseccionBarrera: id
                }
            });
            res.send([{ success: true, response: [{ idBarrera: id, delete: interseccionDeleted === 1 }] }]);
        }
        catch (e) {
            console.log(error);
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }
}
module.exports = BarreraController;