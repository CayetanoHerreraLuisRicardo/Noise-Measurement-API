/********** importamos el módulo 'jsonwebtoken' como mecanismo para autenticarnos con la API por medio de tokens **********/
const jwt = require('jsonwebtoken');
/********** importamos el módulo 'moment' para hacer el manejos de fechas **********/
const moment = require('moment');
/********** establecemos el formato de fechas del módulo 'moment' en español **********/
moment.locale('es');
/********** importamos los modelos de las tablas **********/
const { users, sequelize } = require('../config/db');
/********** importamos el módulo de utilerias **********/
const functions = require('../utils/functions');

class AccessController {
    constructor() { }
    async login(req, res, next) {
        const t = await sequelize.transaction();
        try {
            let data = await users.findOne({
                where: {
                    email: req.body.email, password: functions.encrypt(req.body.email, req.body.password)
                }
            });
            if (!data) {
                res.send([{ success: false, number_error: 1, error: 'usuario o contraseña invalida' }]);
            }
            else {
                if (data.email_verified_at === null) {
                    res.send([{ success: false, number_error: 1, error: `La cuenta con el correo ${data.email} aún no ha sido verificada.` }]);
                } else {
                    const token = functions.createToken(req.body.email, 'login');
                    let update = await data.update({ remember_token: token, updated_at: new Date(Date.now()).toISOString() }, { transaction: t });
                    await t.commit();
                    res.send([{ success: true, response: { id: update.idUsers, name: update.name, idPerfil: update.idPerfil, idSucursal: update.idPerfil, remember_token: update.remember_token } }]);
                }
            }
        }
        catch (e) {
            await t.rollback();
            console.log(e);
            res.send([{ success: false, number_error: -1, error: e.error }]);
        }
    }
    async recoveryPassword(req, res, next) {
        const t = await sequelize.transaction();
        try {
            let data = await users.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (!data) {
                res.send([{ success: false, number_error: 1, error: `El correo ${req.body.email} no se encuentra registrado.` }]);
            }
            else {
                const token = functions.createToken(req.body.email, 'reset');
                let update = await data.update({ reset_token: token, updated_at: new Date(Date.now()).toISOString() }, { transaction: t });

                const subject = `Restablecer contraseña en ${process.env.APP_NAME}`;
                const logo = process.env.APP_LOGO;
                const htmlBody = functions.getBodyResetPassword(data.name, logo, token);
                functions.sendEmail(data.email, subject, htmlBody).then(async () => {
                    await t.commit();
                    res.send([{ success: true, response: { email: update.email } }]);
                }).catch(async (e) => {
                    await t.rollback();
                    res.send([{ success: false, number_error: -1, error: e.error }]);
                })
            }
        }
        catch (e) {
            await t.rollback();
            console.log(e);
            res.send([{ success: false, number_error: -1, error: e.error }]);
        }
    }
    async resetPassword(req, res, next) {
        const t = await sequelize.transaction();
        try {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];
            // Verificamos que el token sea válido
            const tokenData = await jwt.verify(token, process.env.JWT_SECRET_KEY);
            const email = tokenData.data;
            let data = await users.findOne({
                where: {
                    email: email
                }
            });
            if (!data) {
                res.send([{ success: false, number_error: 1, error: `El correo ${email} no se encuentra registrado.` }]);
            }
            else {
                if (data.reset_token !== token) {
                    res.send([{ success: false, number_error: 1, error: `El token enviado no corresponde con el token generado para resetear la contraseña` }]);
                } else {
                    let update = await data.update({ password: functions.encrypt(email, req.body.password), updated_at: new Date(Date.now()).toISOString(), remember_token: null, reset_token: '' }, { transaction: t });
                    await t.commit();
                    res.send([{ success: true, response: { reset: true } }]);
                }
            }
        }
        catch (e) {
            await t.rollback();
            console.log(e);
            res.send([{ success: false, number_error: -1, error: e.error }]);
        }
    }
    async verifyAccount(req, res, next) {
        const t = await sequelize.transaction();
        try {
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];
            // Verificamos que el token sea válido
            const tokenData = await jwt.verify(token, process.env.JWT_SECRET_KEY);
            const email = tokenData.data;
            const data = await users.findOne({
                where: {
                    email: email
                }
            });
            if (!data) {
                res.send([{ success: false, number_error: 1, error: `El correo ${email} no se encuentra registrado.` }]);
            }
            else {
                if (data.email_verified_at !== null) {
                    const date = moment(data.email_verified_at).format('LLLL');
                    res.send([{ success: false, number_error: 1, error: `El correo ${email} ya fue verificado el ${date} hrs.` }]);
                } else {
                    if (data.remember_token !== token) {
                        res.send([{ success: false, number_error: 1, error: `El token enviado no corresponde con el token generado para verificar la cuenta` }]);
                    } else {
                        let update = await data.update({ email_verified_at: new Date(Date.now()).toISOString(), updated_at: new Date(Date.now()).toISOString(), remember_token: null }, { transaction: t });
                        await t.commit();
                        res.send([{ success: true, response: { verified: true } }]);
                    }
                }
            }
        } catch (e) {
            await t.rollback();
            console.log(e);
            res.send([{ success: false, number_error: -1, error: e.error }]);
        }
    }
}

module.exports = AccessController;