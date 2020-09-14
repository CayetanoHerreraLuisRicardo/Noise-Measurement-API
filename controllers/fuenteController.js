/********** importamos Op para hacer uso de operadores logicos en consultas con sequelize **********/
const { Op } = require("sequelize");
/********** importamos los modelos de las tablas ha usar **********/
const { fuente, sequelize } = require('../config/db');

class FuenteController {
    constructor() { }
    async action(req, res, next) {
        let fuentes = req.body;
        let newFuentes = [];
        let updateFuentes = [];
        let deleteFuentes = [];

        let arrayResponse = [];
        const t = await sequelize.transaction();
        try {
            for (var i = 0; i < fuentes.length; i++) {
                switch (fuentes[i].estado) {
                    case 'new': {
                        const o = {
                            idSucursal: fuentes[i].idSucursal,
                            idUsuario: fuentes[i].idusuario,
                            coordNorte: fuentes[i].coord_norte,
                            coordEste: fuentes[i].coord_este,
                            lugar: fuentes[i].lugar,
                            nps: fuentes[i].nps,
                            distanciaInicial: fuentes[i].distancia_inicial,
                            limiteCircunferencia: fuentes[i].limite_circunferencia,
                            altura: fuentes[i].altura
                        }
                        newFuentes.push(o);
                        break;
                    }
                    case 'update': {
                        const o = {
                            idFuente: fuentes[i].idFuente,
                            idSucursal: fuentes[i].idSucursal,
                            idUsuario: fuentes[i].idusuario,
                            coordNorte: fuentes[i].coord_norte,
                            coordEste: fuentes[i].coord_este,
                            lugar: fuentes[i].lugar,
                            nps: fuentes[i].nps,
                            distanciaInicial: fuentes[i].distancia_inicial,
                            limiteCircunferencia: fuentes[i].limite_circunferencia,
                            altura: fuentes[i].altura
                        }
                        updateFuentes.push(o);
                        break;
                    }
                    case 'delete': {
                        deleteFuentes.push(fuentes[i].idFuente);
                        break;
                    }
                    // default:{
                    //     res.send([{ success: false, error: "no se realizó operación"}]);
                    // }
                }
            }

            console.log(newFuentes);
            if (newFuentes.length > 0) {
                const fuentesCreated = await fuente.bulkCreate(newFuentes, { transaction: t });
                if (fuentesCreated.length > 0) {
                    console.log(fuentesCreated);
                    fuentesCreated.forEach((item, i) => {
                        arrayResponse.push({ idFuente: item.idFuente, estado: 'created' });
                    })
                }
            }
            console.log(updateFuentes);
            if (updateFuentes.length > 0) {
                const fuentesToUpdate = updateFuentes.map(async (fuenteToUpdate) => {
                    return await fuente.update(fuenteToUpdate, { where: { idFuente: fuenteToUpdate.idFuente }, transaction: t });
                });
                await Promise.all(fuentesToUpdate).then((item) => {
                    console.log(item)
                    for (var i = 0; i < updateFuentes.length; i++) {
                        if (item[i][0] === 1) {
                            arrayResponse.push({ idFuente: updateFuentes[i].idFuente, estado: 'modified' });
                        }
                    }
                });
            }
            console.log("eliminadas:", deleteFuentes);
            if (deleteFuentes.length > 0) {
                const fuentesExist = await fuente.findAll({
                    where: {
                        idFuente: { [Op.in]: deleteFuentes }
                    }
                });
                await fuente.destroy({ where: { idFuente: deleteFuentes }, transaction: t });
                fuentesExist.forEach((item, index) => {
                    arrayResponse.push({ idFuente: item, estado: 'removed' });
                })
            }
            await t.commit();
            res.send([{ success: true, response: arrayResponse }]);
        } catch (e) {
            await t.rollback();
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }
}

module.exports = FuenteController;