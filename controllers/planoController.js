/********** importamos Op para hacer uso de operadores logicos en consultas con sequelize **********/
const { Op } = require("sequelize");
/********** importamos el módulo 'fs' para el acceso al sistema de archivos  **********/
const fs = require('fs');
/********** importamos los modelos de las tablas **********/
const { fuente, receptor, barrera, interseccion, imagen1, sequelize } = require('../config/db');

class PlanoController {
    constructor() { }
    async action(req, res, next) {
        let body = req.body[0];

        // array de fuentes a actualizar
        let newFuentes = [];
        let updateFuentes = [];
        let deleteFuentes = [];
        // array de receptores a actualizar
        let newReceptores = [];
        let updateReceptores = [];
        let deleteReceptores = [];
        // array de barreras a actualizar
        let newBarreras = [];
        let updateBarreras = [];
        let deleteBarreras = [];
        // array de intersecciones a actualizar
        let newIntersecciones = [];
        let updateIntersecciones = [];
        // array que contiene todos los movimientos realizados
        let arrayResponse = [{ fuentes: [], receptores: [], barreras: [], intersecciones: [], imagenes: [] }];

        const t = await sequelize.transaction();
        try {
            if (body.fuentes) {
                console.log("111111111111")
                for (let i = 0; i < body.fuentes.length; i++) {
                    console.log("111111111111 34444444444");
                    switch (body.fuentes[i].estado) {
                        case 'new': {
                            const o = {
                                idSucursal: body.fuentes[i].idSucursal,
                                idUsuario: body.fuentes[i].idusuario,
                                coordNorte: body.fuentes[i].coord_norte,
                                coordEste: body.fuentes[i].coord_este,
                                lugar: body.fuentes[i].lugar,
                                nps: body.fuentes[i].nps,
                                distanciaInicial: body.fuentes[i].distancia_inicial,
                                limiteCircunferencia: body.fuentes[i].limite_circunferencia,
                                altura: body.fuentes[i].altura
                            }
                            newFuentes.push(o);
                            break;
                        }
                        case 'update': {
                            const o = {
                                idFuente: body.fuentes[i].idFuente,
                                idSucursal: body.fuentes[i].idSucursal,
                                idUsuario: body.fuentes[i].idusuario,
                                coordNorte: body.fuentes[i].coord_norte,
                                coordEste: body.fuentes[i].coord_este,
                                lugar: body.fuentes[i].lugar,
                                nps: body.fuentes[i].nps,
                                distanciaInicial: body.fuentes[i].distancia_inicial,
                                limiteCircunferencia: body.fuentes[i].limite_circunferencia,
                                altura: body.fuentes[i].altura
                            }
                            updateFuentes.push(o);
                            break;
                        }
                        case 'delete': {
                            deleteFuentes.push(body.fuentes[i].idFuente);
                            break;
                        }
                    }
                }
            }
            if (body.receptores) {
                for (let i = 0; i < body.receptores.length; i++) {
                    switch (body.receptores[i].estado) {
                        case 'new': {
                            const o = {
                                idFuente: body.receptores[i].idFuente,
                                nombre: body.receptores[i].nombre,
                                numeroReceptor: body.receptores[i].numeroreceptor,
                                calle: body.receptores[i].calle,
                                numero: body.receptores[i].numero,
                                comuna: body.receptores[i].comuna,
                                datum: body.receptores[i].datum,
                                huso: body.receptores[i].huso,
                                coordNorte: body.receptores[i].coord_norte,
                                coordEste: body.receptores[i].coord_este,
                                zonaEmplazamiento: body.receptores[i].zona_emplazamiento,
                                noCertificado: body.receptores[i].no_certificado,
                                zonidificacion: body.receptores[i].zonidificacion,
                                distanciaFuente: body.receptores[i].distancia_fuente,
                                distanciaCircunferencia: body.receptores[i].distancia_circunferencia,
                                dBA: body.receptores[i].dBA,
                                altura: body.receptores[i].altura,
                            }
                            newReceptores.push(o);
                            break;
                        }
                        case 'update': {
                            const o = {
                                idReceptor: body.receptores[i].idReceptor,
                                idFuente: body.receptores[i].idFuente,
                                nombre: body.receptores[i].nombre,
                                numeroReceptor: body.receptores[i].numeroreceptor,
                                calle: body.receptores[i].calle,
                                numero: body.receptores[i].numero,
                                comuna: body.receptores[i].comuna,
                                datum: body.receptores[i].datum,
                                huso: body.receptores[i].huso,
                                coordNorte: body.receptores[i].coord_norte,
                                coordEste: body.receptores[i].coord_este,
                                zonaEmplazamiento: body.receptores[i].zona_emplazamiento,
                                noCertificado: body.receptores[i].no_certificado,
                                zonidificacion: body.receptores[i].zonidificacion,
                                distanciaFuente: body.receptores[i].distancia_fuente,
                                distanciaCircunferencia: body.receptores[i].distancia_circunferencia,
                                dBA: body.receptores[i].dBA,
                                altura: body.receptores[i].altura,
                            }
                            updateReceptores.push(o);
                            break;
                        }
                        case 'delete': {
                            deleteReceptores.push(body.receptores[i].idReceptor);
                            break;
                        }
                    }
                }
            }
            if (body.barreras) {
                for (let i = 0; i < body.barreras.length; i++) {
                    switch (body.barreras[i].estado) {
                        case 'new': {
                            const o = {
                                idFuente: body.barreras[i].idFuente,
                                coordNorteInicio: body.barreras[i].coord_norte_inicio,
                                coordEsteInicio: body.barreras[i].coord_este_inicio,
                                coordNorteFin: body.barreras[i].coord_norte_fin,
                                coordEsteFin: body.barreras[i].coord_este_fin,
                                altura: body.barreras[i].altura
                            }
                            newBarreras.push(o);
                            break;
                        }
                        case 'update': {
                            console.log('case update1')
                            if (body.barreras[i].idBarrera) {
                                const o = {
                                    idBarrera: body.barreras[i].idBarrera,
                                    idFuente: body.barreras[i].idFuente,
                                    coordNorteInicio: body.barreras[i].coord_norte_inicio,
                                    coordEsteInicio: body.barreras[i].coord_este_inicio,
                                    coordNorteFin: body.barreras[i].coord_norte_fin,
                                    coordEsteFin: body.barreras[i].coord_este_fin,
                                    altura: body.barreras[i].altura
                                }
                                updateBarreras.push(o);
                            }
                            break;
                        }
                        case 'delete': {
                            deleteBarreras.push(body.barreras[i].idFuente);
                            break;
                        }
                    }
                }
            }
            if (body.intersecciones) {
                for (let i = 0; i < body.intersecciones.length; i++) {
                    switch (body.intersecciones[i].estado) {
                        case 'new': {
                            const o = {
                                idBarrera: body.intersecciones[i].idBarrera,
                                idReceptor: body.intersecciones[i].idReceptor,
                                coordNorte: body.intersecciones[i].coord_norte,
                                coordEste: body.intersecciones[i].coord_este,
                            }
                            newIntersecciones.push(o);
                            break;
                        }
                        case 'update': {
                            console.log('case update1')
                            if (body.intersecciones[i].idPuntoInterseccionBarrera) {
                                const o = {
                                    idPuntoInterseccionBarrera: body.intersecciones[i].idPuntoInterseccionBarrera,
                                    idBarrera: body.intersecciones[i].idBarrera,
                                    idReceptor: body.intersecciones[i].idReceptor,
                                    coordNorte: body.intersecciones[i].coord_norte,
                                    coordEste: body.intersecciones[i].coord_este,
                                }
                                updateIntersecciones.push(o);
                            }
                            break;
                        }
                    }
                }
            }

            /**************** transacciones de la tabla fuente ********************/
            console.log("2222222222222");
            if (newFuentes.length > 0) {
                console.log("33333333");
                const fuentesCreated = await fuente.bulkCreate(newFuentes, { transaction: t });
                console.log("44444");
                if (fuentesCreated.length > 0) {
                    console.log("5555555555");
                    console.log(fuentesCreated);
                    fuentesCreated.forEach((item, i) => {
                        arrayResponse[0].fuentes.push({ idFuente: item.idFuente, estado: 'created' });
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
                    for (let i = 0; i < updateFuentes.length; i++) {
                        if (item[i][0] === 1) {
                            arrayResponse[0].fuentes.push({ idFuente: updateFuentes[i].idFuente, estado: 'modified' });
                        }
                    }
                });
            }
            console.log("eliminadas:", deleteFuentes);
            if (deleteFuentes.length > 0) {
                const ids = [];
                deleteFuentes.forEach((item, index) => {
                    ids.push({ idFuente: item });
                })
                const fuentesExist = await fuente.findAll({
                    where: {
                        [Op.or]: ids
                    }
                });
                await fuente.destroy({ where: { idFuente: deleteFuentes }, transaction: t });

                fuentesExist.forEach((item, index) => {
                    arrayResponse[0].fuentes.push({ idFuente: item, estado: 'removed' });
                })
            }

            /**************** transacciones de la tabla receptores ********************/
            console.log(newReceptores);
            if (newReceptores.length > 0) {
                const receptoresCreated = await receptor.bulkCreate(newReceptores, { transaction: t });
                if (receptoresCreated.length > 0) {
                    console.log(receptoresCreated);
                    receptoresCreated.forEach((item, i) => {
                        arrayResponse[0].receptores.push({ idReceptor: item.idReceptor, estado: 'created' });
                    })
                }
            }
            console.log(updateReceptores);
            if (updateReceptores.length > 0) {
                const receptoresToUpdate = updateReceptores.map(async (fuenteToUpdate) => {
                    return await receptor.update(fuenteToUpdate, { where: { idReceptor: fuenteToUpdate.idReceptor }, transaction: t });
                });
                await Promise.all(receptoresToUpdate).then((item) => {
                    for (let i = 0; i < updateReceptores.length; i++) {
                        if (item[i][0] === 1) {
                            arrayResponse[0].receptores.push({ idReceptor: updateReceptores[i].idReceptor, estado: 'modified' });
                        }
                    }
                });
            }
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
                    arrayResponse[0].receptores.push({ idReceptor: item.idReceptor, estado: 'removed' });
                })
            }
            /**************** transacciones de la tabla barrera ********************/
            console.log(newBarreras);
            if (newBarreras.length > 0) {
                const barrerasCreated = await barrera.bulkCreate(newBarreras, { transaction: t });
                if (barrerasCreated.length > 0) {
                    console.log(barrerasCreated);
                    barrerasCreated.forEach((item, i) => {
                        arrayResponse[0].barreras.push({ idBarrera: item.idBarrera, idFuente: item.idFuente, estado: 'created' });
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
                    for (let i = 0; i < updateBarreras.length; i++) {
                        if (item[i][0] === 1) {
                            arrayResponse[0].barreras.push({ idBarrera: updateBarreras[i].idBarrera, idFuente: updateBarreras[i].idFuente, estado: 'modified' });
                        }
                    }
                });
            }
            console.log("eliminadas:", deleteBarreras);
            if (deleteBarreras.length > 0) {
                const ids = [];
                deleteBarreras.forEach((item, index) => {
                    ids.push({ idFuente: item });
                })
                const barrerasExist = await barrera.findAll({
                    where: {
                        [Op.or]: ids
                    }
                });
                await barrera.destroy({ where: { idFuente: deleteBarreras }, transaction: t });
                barrerasExist.forEach((item, index) => {
                    arrayResponse[0].barreras.push({ idFuente: item, estado: 'removed' });
                })
            }
            /**************** transacciones de la tabla intersecciones ********************/
            console.log(newIntersecciones);
            if (newIntersecciones.length > 0) {
                const interseccionesCreated = await interseccion.bulkCreate(newIntersecciones, { transaction: t });
                if (interseccionesCreated.length > 0) {
                    console.log(interseccionesCreated);
                    interseccionesCreated.forEach((item, i) => {
                        arrayResponse[0].intersecciones.push({ idPuntoInterseccionBarrera: item.idPuntoInterseccionBarrera, idBarrera: item.idBarrera, idReceptor: item.idReceptor, estado: 'created' });
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
                    for (let i = 0; i < updateIntersecciones.length; i++) {
                        if (item[i][0] === 1) {
                            arrayResponse[0].intersecciones.push({ idPuntoInterseccionBarrera: updateIntersecciones[i].idPuntoInterseccionBarrera, idBarrera: updateIntersecciones[i].idBarrera, idReceptor: updateIntersecciones[i].idReceptor, estado: 'modified' });
                        }
                    }
                });
            }
            if (body.imagenes) {
                for (let i = 0; i < body.imagenes.length; i++) {
                    console.log('2222');
                    if (body.imagenes[i].estado === 'new') {
                        console.log('xxxxxxx');
                        const bitMap = new Buffer.from(body.imagenes[i].imagen, 'base64');
                        console.log('<<<<<<<');
                        const imagen1Created = await imagen1.create({
                            idFuente: body.imagenes[i].idFuente,
                            idReceptor: body.imagenes[i].idReceptor,
                            // imagen: bitMap.toString('binary'),
                            url: ""
                        }, { transaction: t });
                        console.log('vvvvvvvvv1111');
                        const newFile = `public/images/imagen1/${imagen1Created.idImagen}.png`;
                        fs.writeFileSync(newFile, bitMap);
                        const imageData = fs.readFileSync(newFile);
                        await imagen1.update({ url: newFile, imagen: imageData }, {
                            where: {
                                idImagen: imagen1Created.idImagen
                            }, transaction: t
                        });
                        console.log('vvvvvvvvv222');
                        console.log(imagen1);
                        // fs.writeFileSync(newFile, bitMap);
                        console.log('====gggggg=');
                        arrayResponse[0].imagenes.push({
                            idImagen: imagen1Created.idImagen,
                            idFuente: imagen1Created.idFuente,
                            idReceptor: imagen1Created.idReceptor,
                            url: newFile, estado: 'created'
                        });
                    }
                    if (body.imagenes[i].estado === 'update') {
                        const imagen1Exist = await imagen1.findByPk(body.imagenes[i].idImagen);
                        console.log('xxxxxxx');
                        if (imagen1Exist != null) {
                            console.log('yyyyy');
                            const bitMap = new Buffer.from(body.imagenes[i].imagen, 'base64');
                            console.log('<<<<<<<');
                            const updateFile = `public/images/imagen1/${body.imagenes[i].idImagen}.png`;
                            fs.writeFileSync(updateFile, bitMap);
                            const imageData = fs.readFileSync(updateFile);
                            const o = {
                                idFuente: body.imagenes[i].idFuente,
                                idReceptor: body.imagenes[i].idReceptor,
                                imagen: imageData,
                                url: updateFile
                            };
                            console.log('vvvvvvvvv1111');
                            const imagen1Updated = await imagen1.update(o, {
                                where: {
                                    idImagen: body.imagenes[i].idImagen
                                }, transaction: t
                            });
                            if (imagen1Updated[0] === 1) {
                                arrayResponse[0].imagenes.push({
                                    idImagen: body.imagenes[i].idImagen,
                                    idFuente: body.imagenes[i].idFuente,
                                    idReceptor: body.imagenes[i].idReceptor,
                                    url: updateFile,
                                    estado: 'modified'
                                });
                            }
                        }
                        console.log('====gggggg=');
                    }
                }
            }
            await t.commit();
            res.send([{ response: arrayResponse }]);
        } catch (e) {
            await t.rollback();
            console.log(e);
            console.log(e.message);
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }
    async getByUserOrFuente(req, res, next) {
        let where = {};
        try {
            if (req.params.idusuario) {
                where = {
                    idUsuario: req.params.idusuario
                };
            }
            if (req.params.idFuente) {
                where = {
                    idFuente: req.params.idFuente
                };
            }
            const fuentes = await fuente.findAll({
                where: where,
                attributes: ['idFuente', ['idUsuario', 'idusuario'], ['coordNorte', 'coord_norte'], ['coordEste', 'coord_este'], 'lugar', 'nps', ['distanciaInicial', 'distancia_inicial'], ['limiteCircunferencia', 'limite_circunferencia'], 'altura']
            });
            const idsFuentes = fuentes.map(x => x.idFuente);
            console.log('idsFuentes', idsFuentes);
            const receptores = await receptor.findAll({
                where: {
                    idFuente: { [Op.in]: idsFuentes }
                },
                attributes: ['idReceptor', 'idFuente', 'nombre', ['numeroReceptor', 'numeroreceptor'], 'calle', 'numero', 'comuna', 'datum', 'huso', ['coordNorte', 'coord_norte'], ['coordEste', 'coord_este'], ['zonaEmplazamiento', 'zona_emplazamiento'], ['noCertificado', 'no_certificado'], 'zonidificacion', ['distanciaFuente', 'distancia_fuente'], ['distanciaCircunferencia', 'distancia_circunferencia'], 'dBA', 'altura']
            });
            const idsReceptores = receptores.map(x => x.idReceptor);
            console.log('idsReceptores', idsReceptores);
            const barreras = await barrera.findAll({
                where: {
                    idFuente: { [Op.in]: idsFuentes }
                },
                attributes: ['idBarrera', 'idFuente', ['coordNorteInicio', 'coord_norte_inicio'], ['coordEsteInicio', 'coord_este_inicio'], ['coordNorteFin', 'coord_norte_fin'], ['coordEsteFin', 'coord_este_fin'], 'altura']
            });
            const idsBarreras = barreras.map(x => x.idBarrera);
            console.log('idsBarreras', idsBarreras);

            const intersecciones = await interseccion.findAll({
                where: {
                    idReceptor: { [Op.in]: idsReceptores },
                    idBarrera: { [Op.in]: idsBarreras }
                },
                attributes: ['idPuntoInterseccionBarrera', 'idBarrera', 'idReceptor', ['coordNorte', 'coord_norte'], ['coordEste', 'coord_este']]
            });
            const imagenes = await imagen1.findAll({
                where: {
                    idReceptor: { [Op.in]: idsReceptores },
                    idFuente: { [Op.in]: idsFuentes }
                },
                attributes: ['idImagen', 'idFuente', 'idReceptor', 'url']
            });
            res.send([{ 'fuentes': fuentes, 'receptores': receptores, 'barreras': barreras, 'intersecciones': intersecciones, 'imagenes': imagenes }]);
        } catch (e) {
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }
}
module.exports = PlanoController;