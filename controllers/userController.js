/********** importamos los modelos de las tablas **********/
const { users, sequelize } = require('../config/db');
/********** importamos el módulo de utilerias **********/
const functions = require('../utils/functions');

class UserController {
    constructor() { }
    async register(req, res, next) {
        const t = await sequelize.transaction();
        try {
            const data = await users.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (data) {
                res.send([{ success: false, number_error: 1, error: "Email ya registrado" }]);
            }
            else {
                const newUser = {
                    name: req.body.name,
                    email: req.body.email,
                    password: functions.encrypt(req.body.email, req.body.password),
                    admin: req.body.isAdmin,
                    idSucursal: 1,
                    created_at: new Date(Date.now()).toISOString()
                };
                let oUser = await users.create(newUser, { transaction: t });
                if (oUser) {
                    const subject = `¡${req.body.name}! te damos la bienvenida a ${process.env.APP_NAME}`;
                    const logo = process.env.APP_LOGO;
                    const token = functions.createToken(req.body.email, 'account');
                    const htmlBody = functions.getBodyConfirmAccount(req.body.name, logo, token);
                    functions.sendEmail(req.body.email, subject, htmlBody).then(async () => {
                        let update = await oUser.update({ remember_token: token, updated_at: new Date(Date.now()).toISOString() }, { transaction: t });
                        await t.commit();
                        res.send([{ success: true, response: { id: oUser.idUsers, name: oUser.name, idPerfil: oUser.idPerfil, idSucursal: oUser.idSucursal } }]);
                    }).catch(async (e) => {
                        await t.rollback();
                        res.send([{ success: false, number_error: -1, error: e.message }]);
                    })
                }
            }
        }
        catch (e) {
            console.log(e);
            await t.rollback();
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }
    async update(req, res, next) {
        try {
            const oUser = await users.findByPk(req.body.id);
            console.log(oUser)
            if (!oUser) {
                res.send([{ success: false, number_error: 1, error: "El usuario no existe" }]);
            }
            else {
                console.log('antes de entrar a valodar el correo')
                // comparar el email enviado en el request con el email actual en la base de datos 
                if (req.body.email == oUser.email) {
                    console.log('los email son ===')
                    oUser.update({ name: req.body.name, password: functions.encrypt(oUser.email, req.body.password), admin: req.body.isAdmin, updated_at: new Date(Date.now()).toISOString() }).then((data) => {
                        console.log('se actualizo el usuario')
                        res.send([{ success: true, response: { id: data.idUsers, name: data.name, idPerfil: data.idPerfil, idSucursal: data.idSucursal } }]);
                    }).catch((e) => {
                        console.log('entro en el catch del update')
                        res.send([{ success: false, number_error: -1, error: e.message }]);
                    });
                } else {
                    // validamos que ese email no pertenezca a otro usuario
                    const oUserExist = await users.findOne({
                        where: {
                            email: req.body.email
                        }
                    });
                    // existe otro usuario con ese correo a modificar
                    if (oUserExist) {
                        res.send([{ "success": false, "number_error": 1, "error": "Email ya registrado con la cuenta de otro usuario" }]);
                    }
                    //no existe procedemos a actualizar
                    else {
                        users.update({ name: req.body.name, /*email:req.body.email,*/ password: functions.encrypt(oUser.email, req.body.password), admin: req.body.isAdmin, updated_at: new Date(Date.now()).toISOString() }).then((data) => {
                            res.send([{ success: true, response: { id: data.idUsers, name: data.name, idPerfil: data.idPerfil, idSucursal: data.idSucursal } }]);
                        }).catch((e) => {
                            res.send([{ success: false, number_error: -1, error: e.message }]);
                        });
                    }
                }
            }
        }
        catch (e) {
            res.send([{ success: false, number_error: -1, error: e.message }]);
        }
    }
}

module.exports = UserController;