/********** importamos el módulo 'fs' para el acceso al sistema de archivos  **********/
const fs = require('fs');
/********** importamos los modelos de las tablas **********/
const { imagen1, sequelize } = require('../config/db');

class Imagen1Controller {
    constructor() { }
    async create(req, res, next) {
        const imagenes = req.body;
        // const newImagen1 = [];
        const arrayResponse = [];
        const t = await sequelize.transaction();
        try {
            console.log('111111');
            for (let i = 0; i < imagenes.length; i++) {
                console.log('2222');
                if (imagenes[i].estado === 'new') {
                    console.log('xxxxxxx');
                    const bitMap = new Buffer.from(imagenes[i].imagen, 'base64');
                    console.log('<<<<<<<');
                    // const date = new Date();
                    // const urlImg = `public/images/imagen1/${imagenes[i].idFuente}_${imagenes[i].idReceptor}_${date.getFullYear()}${date.getMonth()}${date.getDay()}_${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}.png`;
                    console.log('vvvvvvvvv');
                    const imagen1Created = await imagen1.create({
                        idFuente: imagenes[i].idFuente,
                        idReceptor: imagenes[i].idReceptor,
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
                    arrayResponse.push({
                        idImagen: imagen1Created.idImagen,
                        idFuente: imagen1Created.idFuente,
                        idReceptor: imagen1Created.idReceptor,
                        url: newFile, estado: 'created'
                    });
                }
            }
            console.log('3333');
            await t.commit();
            res.send([{ success: true, response: arrayResponse }]);
        }
        catch (e) {
            await t.rollback();
            console.log(error);
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }

    //validar que exista el id si => procedemos a guardar el file y update de la tabla
    async update(req, res, next) {
        const imagenes = req.body;
        const arrayResponse = [];
        const t = await sequelize.transaction();
        try {
            console.log('111111');
            for (let i = 0; i < imagenes.length; i++) {
                console.log('2222');
                if (imagenes[i].estado === 'update') {
                    const imagen1Exist = await imagen1.findByPk(imagenes[i].idImagen);
                    console.log('xxxxxxx');
                    if (imagen1Exist != null) {
                        console.log('yyyyy');
                        const bitMap = new Buffer.from(imagenes[i].imagen, 'base64');
                        console.log('<<<<<<<');
                        const updateFile = `public/images/imagen1/${imagenes[i].idImagen}.png`;
                        fs.writeFileSync(updateFile, bitMap);
                        const imageData = fs.readFileSync(updateFile);
                        const o = {
                            idFuente: imagenes[i].idFuente,
                            idReceptor: imagenes[i].idReceptor,
                            imagen: imageData,
                            url: updateFile
                        };
                        console.log('vvvvvvvvv1111');
                        const imagen1Updated = await imagen1.update(o, {
                            where: {
                                idImagen: imagenes[i].idImagen
                            }, transaction: t
                        });
                        if (imagen1Updated[0] === 1) {
                            arrayResponse.push({
                                idImagen: imagenes[i].idImagen,
                                idFuente: imagenes[i].idFuente,
                                idReceptor: imagenes[i].idReceptor,
                                url: updateFile,
                                estado: 'modified'
                            });
                        }
                    }
                    console.log('====gggggg=');
                }
            }
            console.log('3333');
            await t.commit();
            res.send([{ success: true, response: arrayResponse }]);
        }
        catch (error) {
            await t.rollback();
            console.log(error);
            res.send([{ success: false, number_error: error.error }]);
        }
    }
    async delete(req, res, next) {
        const id = req.params.idImagen;
        console.log(id, req.params.idImagen);
        const t = await sequelize.transaction();
        try {
            const imagen1Deleted = await imagen1.destroy({
                where: {
                    idImagen: id
                }, transaction: t
            });
            if (imagen1Deleted === 1) {
                fs.unlinkSync(`public/images/imagen1/${id}.png`);
            }
            await t.commit();
            res.send([{ success: true, response: [{ idImagen: id, delete: imagen1Deleted == 1 }] }]);
        }
        catch (error) {
            console.log(error);
            await t.rollback();
            res.send([{ success: false, number_error: error.error }]);
        }
    }
    async get(req, res, next) {
        const id = req.params.idImagen;
        try {
            const oImagen = await imagen1.findByPk(id, { attributes: ['idImagen', 'idFuente', 'idReceptor', 'imagen', 'url'] });
            if (oImagen === null) {
                res.send([{ success: false, response: [] }]);
            }
            console.log(111111111111111)
            const buff = oImagen.imagen;
            const bufferBase64 = buff.toString('base64');
            console.log(33333333333333)
            const imagen1Response = {
                idImagen: oImagen.idImagen,
                idFuente: oImagen.idFuente,
                idReceptor: oImagen.idReceptor,
                imagen: bufferBase64,
                url: oImagen.url,
            }
            console.log(444444444444444)
            res.send([{ success: true, response: [imagen1Response] }]);
        }
        catch (error) {
            console.log(error);
            res.send([{ success: false, number_error: error.error }]);
        }
    }
}
module.exports = Imagen1Controller;