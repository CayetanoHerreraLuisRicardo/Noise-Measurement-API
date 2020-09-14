/********** importamos Op para hacer uso de operadores logicos en consultas con sequelize **********/
const { Op } = require("sequelize");
/********** importamos los modelos de las tablas **********/
const { receptor, sequelize } = require('../config/db');

class ReceptorController {
    constructor() { }
    async action(req, res, next) {
        let receptores = req.body;
        let newReceptores = [];
        let updateReceptores = [];
        let deleteReceptores = [];

        let arrayResponse = [];
        const t = await sequelize.transaction();
        try {
            for (var i = 0; i < receptores.length; i++) {
                switch (receptores[i].estado) {
                    case 'new': {
                        const o = {
                            idFuente: receptores[i].idFuente,
                            nombre: receptores[i].nombre,
                            numeroReceptor: receptores[i].numeroreceptor,
                            calle: receptores[i].calle,
                            numero: receptores[i].numero,
                            comuna: receptores[i].comuna,
                            datum: receptores[i].datum,
                            huso: receptores[i].huso,
                            coordNorte: receptores[i].coord_norte,
                            coordEste: receptores[i].coord_este,
                            zonaEmplazamiento: receptores[i].zona_emplazamiento,
                            noCertificado: receptores[i].no_certificado,
                            zonidificacion: receptores[i].zonidificacion,
                            distanciaFuente: receptores[i].distancia_fuente,
                            distanciaCircunferencia: receptores[i].distancia_circunferencia,
                            dBA: receptores[i].dBA,
                            altura: receptores[i].altura,
                        }
                        newReceptores.push(o);
                        break;
                    }
                    case 'update': {
                        const o = {
                            idReceptor: receptores[i].idReceptor,
                            idFuente: receptores[i].idFuente,
                            nombre: receptores[i].nombre,
                            numeroReceptor: receptores[i].numeroreceptor,
                            calle: receptores[i].calle,
                            numero: receptores[i].numero,
                            comuna: receptores[i].comuna,
                            datum: receptores[i].datum,
                            huso: receptores[i].huso,
                            coordNorte: receptores[i].coord_norte,
                            coordEste: receptores[i].coord_este,
                            zonaEmplazamiento: receptores[i].zona_emplazamiento,
                            noCertificado: receptores[i].no_certificado,
                            zonidificacion: receptores[i].zonidificacion,
                            distanciaFuente: receptores[i].distancia_fuente,
                            distanciaCircunferencia: receptores[i].distancia_circunferencia,
                            dBA: receptores[i].dBA,
                            altura: receptores[i].altura,
                        }
                        updateReceptores.push(o);
                        break;
                    }
                    case 'delete': {
                        deleteReceptores.push(receptores[i].idReceptor);
                        break;
                    }
                    // default:{
                    //     res.send([{ success: false, error: "no se realizó operación"}]);
                    // }
                }
            }

            console.log(newReceptores);
            if (newReceptores.length > 0) {
                const receptoresCreated = await receptor.bulkCreate(newReceptores, { transaction: t });
                if (receptoresCreated.length > 0) {
                    console.log(receptoresCreated);
                    receptoresCreated.forEach((item, i) => {
                        arrayResponse.push({ idReceptor: item.idReceptor, estado: 'created' });
                    })
                }
            }
            console.log(updateReceptores);
            if (updateReceptores.length > 0) {
                const receptoresToUpdate = updateReceptores.map(async (fuenteToUpdate) => {
                    return await receptor.update(fuenteToUpdate, { where: { idReceptor: fuenteToUpdate.idReceptor }, transaction: t });
                });
                await Promise.all(receptoresToUpdate).then((item) => {
                    for (var i = 0; i < updateReceptores.length; i++) {
                        if (item[i][0] === 1) {
                            arrayResponse.push({ idReceptor: updateReceptores[i].idReceptor, estado: 'modified' });
                        }
                    }
                });
            }
            // console.log("eliminadas:", deleteReceptores);
            if (deleteReceptores.length > 0) {
                const ids = [];
                deleteReceptores.forEach((item, index) => {
                    ids.push({ idReceptor: item });
                })
                const receptoresExist = await receptor.findAll({
                    where: {
                        [Op.or]: ids
                    }
                });
                console.log(receptoresExist);
                const del = await receptor.destroy({ where: { idReceptor: deleteReceptores }, transaction: t });
                console.log(del)
                receptoresExist.forEach((item, i) => {
                    arrayResponse.push({ idReceptor: item.idReceptor, estado: 'removed' });
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

module.exports = ReceptorController;