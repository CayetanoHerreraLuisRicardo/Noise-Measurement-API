/********** importamos Op para hacer uso de operadores logicos en consultas con sequelize **********/
const { Op } = require("sequelize");
/********** importamos los modelos de las tablas **********/
const { barrera, sequelize } = require('../config/db');

class BarreraController {
    constructor() { }
    async action(req, res, next) {
        let barreras = req.body;
        let newBarreras = [];
        let updateBarreras = [];
        let deleteBarreras = [];

        let arrayResponse = [];
        const t = await sequelize.transaction();
        try {
            for (var i = 0; i < barreras.length; i++) {
                switch (barreras[i].estado) {
                    case 'new': {
                        const o = {
                            idFuente: barreras[i].idFuente,
                            coordNorteInicio: barreras[i].coord_norte_inicio,
                            coordEsteInicio: barreras[i].coord_este_inicio,
                            coordNorteFin: barreras[i].coord_norte_fin,
                            coordEsteFin: barreras[i].coord_este_fin,
                            altura: barreras[i].altura
                        }
                        newBarreras.push(o);
                        break;
                    }
                    case 'update': {
                        console.log('case update1')
                        if (barreras[i].idBarrera) {
                            const o = {
                                idBarrera: barreras[i].idBarrera,
                                idFuente: barreras[i].idFuente,
                                coordNorteInicio: barreras[i].coord_norte_inicio,
                                coordEsteInicio: barreras[i].coord_este_inicio,
                                coordNorteFin: barreras[i].coord_norte_fin,
                                coordEsteFin: barreras[i].coord_este_fin,
                                altura: barreras[i].altura
                            }
                            updateBarreras.push(o);
                        }
                        break;
                    }
                    case 'delete': {
                        deleteBarreras.push(barreras[i].idBarrera);
                        break;
                    }
                }
            }

            console.log(newBarreras);
            if (newBarreras.length > 0) {
                const barrerasCreated = await barrera.bulkCreate(newBarreras, { transaction: t });
                if (barrerasCreated.length > 0) {
                    console.log(barrerasCreated);
                    barrerasCreated.forEach((item, i) => {
                        arrayResponse.push({ idBarrera: item.idBarrera, idFuente: item.idFuente, estado: 'created' });
                    })
                }
            }
            console.log('case update2')
            console.log(updateBarreras);
            if (updateBarreras.length > 0) {
                console.log('case update 3')
                const barrerasToUpdate = updateBarreras.map(async (barreraToUpdate) => {
                    return await barrera.update(barreraToUpdate, { where: { idBarrera: barreraToUpdate.idBarrera }, transaction: t });
                });
                console.log('case update 4')
                await Promise.all(barrerasToUpdate).then((item) => {
                    console.log(item)
                    for (var i = 0; i < updateBarreras.length; i++) {
                        if (item[i][0] === 1) {
                            arrayResponse.push({ idBarrera: updateBarreras[i].idBarrera, idFuente: updateBarreras[i].idFuente, estado: 'modified' });
                        }
                    }
                });
            }
            console.log("eliminadas:", deleteBarreras);
            if (deleteBarreras.length > 0) {
                const barrerasExist = await barrera.findAll({
                    where: {
                        idBarrera: { [Op.in]: deleteBarreras }
                    }
                });
                await barrera.destroy({ where: { idBarrera: deleteBarreras }, transaction: t });
                barrerasExist.forEach((item, index) => {
                    arrayResponse.push({ idBarrera: item.idBarrera, estado: 'removed' });
                })
            }
            await t.commit();
            res.send([{ success: true, response: arrayResponse }]);
        } catch (e) {
            await t.rollback();
            console.log(e);
            res.send([{ success: false, error: e.message }]);
        }
    }
    async delete(req, res, next) {
        const id = req.params.idBarrera;
        try {
            const barreraDeleted = await barrera.destroy({
                where: {
                    idBarrera: id
                }
            });
            res.send([{ success: true, response: [{ idBarrera: id, delete: barreraDeleted === 1 }] }]);
        }
        catch (error) {
            console.log(error);
            res.send([{ success: false, number_error: error.error }]);
        }
    }
    async getByFuente(req, res, next) {
        try {
            const oBarreras = await barrera.findAll({
                where: {
                    idFuente: req.params.idFuente
                }, attributes: ['idBarrera', 'idFuente', ['coordNorteInicio', 'coord_norte_inicio'], ['coordEsteInicio', 'coord_este_inicio'], ['coordNorteFin', 'coord_norte_fin'], ['coordEsteFin', 'coord_este_fin'], 'altura']
            });
            res.send([{ success: true, response: oBarreras }]);
        } catch (e) {
            res.send([{ success: false, number_error: error.error }]);
        }
    }
}
module.exports = BarreraController;