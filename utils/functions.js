/********** importamos módulo 'nodemailer' para envio de correos **********/
const nodemailer = require('nodemailer');
/********** importamos el módulo 'googleapis' para hacer uso de la API de Google **********/
const { google } = require("googleapis");
/********** importamos el módulo 'jsonwebtoken' como mecanismo para autenticarnos con la API por medio de tokens **********/
const jwt = require('jsonwebtoken');
/********** importamos el módulo 'moment' para hacer el manejos de fechas **********/
const moment = require('moment');
/********** importamos el módulo 'crypto' para encriptar la contraseña **********/
const crypto = require('crypto');
/********** importamos el módulo 'OAuth2' para hacer uso de  estándar abierto que permite flujos simples de autorización de aplicaciones **********/
const OAuth2 = google.auth.OAuth2;

/**
* @description Funcion que envia correos
* @param {string} _email ==> destinatario
* @param {string} _subject ==> titulo
* @param {string} _body ==> cuerpo del correo en formato html
*/
exports.sendEmail = async (_email, _subject, _body) => {
    // Creamos un objeto OAuth2
    const myOAuth2Client = new OAuth2(
        process.env.GOOGLE_CLIENT_ID, // client Id
        process.env.GOOGLE_CLIENT_SECRET, // client secret
    );
    // establecemos el valor del refresh token
    myOAuth2Client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN
    });
    // recuperamos un nuevo access token  cuando este expire
    const myAccessToken = myOAuth2Client.getAccessToken();
    /* 
        Para este punto ya debimos haber creado nuestra aplicación en google cloud console: https://console.cloud.google.com/
        los datos que nos piden nos lo proporciona la aplicación creada en google cloud console
    */
    const transporter = nodemailer.createTransport({
        service: "gmail", // proveedor de servicio de gmail
        auth: {
            type: "OAuth2", // tipo de autenticación
            user: process.env.GOOGLE_ACCOUNT, // tu cuenta de correo usado en nuestra aplicación de google cloud console 
            clientId: process.env.GOOGLE_CLIENT_ID, // client id 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, // client secret
            refreshToken: process.env.GOOGLE_REFRESH_TOKEN, // refresh token
            accessToken: myAccessToken //access token variable we defined earlier
        }
    });
    const mailOptions = {
        from: process.env.GOOGLE_ACCOUNT, // remitente
        to: _email, // destinatario
        subject: _subject, // Titulo del correo
        html: _body // cuerpo del correo con formato HTML
    };
    // enviamos el correo electronico
    let info = await transporter.sendMail(mailOptions);

    // console.log('Si llegaste a este punto significa que el correo fue enviado exitosamente');

    // Solo encesario cuando se utilices conexiones agrupadas: http://nodemailer.com/smtp/pooled/
    // transporter.close();
    /*     return new Promise(function (resolve, reject){
                // enviamos el correo electronico
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                   console.log("error: ", err);
                   reject(err);
                } else {
                   console.log(`Mail sent successfully!`);
                   resolve(info);
                }
             });
    
        }) */
};

/**
* @description Función que regresa el cuerpo del correo de confirmar cuenta en formato HTML
* @param {string} _name ==> nombre del usuario
* @param {string} _logo ==> url de la imagen del logotipo de la empresa o proyecto
* @param {string} _token ==> token generado para confirmar/verificar cuenta
*/
exports.getBodyConfirmAccount = (_name, _logo, _token) => {
    const time = moment.duration(process.env.JWT_ACCOUNT_EXPIRES_IN);
    var days = `${time.days()} dias`;
    const body = `<div bgcolor="#f6f6f6" style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;width:100%!important;height:100%;margin:0;padding:0">
        <table style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;width:100%;margin:0;padding:20px">
        <tbody>
            <tr style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0">
                <td style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0"></td>
                <td bgcolor="#FFFFFF" style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;display:block!important;max-width:600px!important;clear:both!important;margin:0 auto;padding:0;border:1px solid #f0f0f0">
                    <div style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;max-width:600px;display:block;margin:0 auto;padding:20px">
                    <table style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;width:100%;margin:0;padding:0">
                        <tbody>
                            <tr style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0">
                                <td style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0">
                                <img src="${_logo}" style="width:100%;margin-bottom:20px" class="CToWUd a6T" tabindex="0">
                                <div class="a6S" dir="ltr" style="opacity: 0.01; left: 781.667px; top: 205.333px;">
                                    <div id=":2a7" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" role="button" tabindex="0" aria-label="Descargar el archivo adjunto " data-tooltip-class="a1V" data-tooltip="Descargar">
                                        <div class="aSK J-J5-Ji aYr"></div>
                                    </div>
                                </div>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">Hola ${_name},</p>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                    ¡Me encanta darte la bienvenida a ${process.env.APP_NAME}! Me emociona que hayas decidido unirte a nuestra plataforma.
                                </p>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                    Estás a 1 solo paso de pertenecer a ${process.env.APP_NAME}:
                                </p>
                                <ol>
                                    <li style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                        <strong>Verifica tu correo electrónico</strong> <span style="font-style:italic">Confirma tu dirección de correo electrónico haciendo click en el siguiente botón: </span>
                                    </li>
                                    <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0;text-align:center"><a style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;color:#fff;text-decoration:none;font-weight:bold;text-align:center;display:inline-block;border-radius:25px;background-color:#348eda;margin:20px 10px 20px 0;padding:10px 20px" href="${process.env.APP_WEB_BASE_URL}#/${process.env.APP_WEB_COMFIRM_ACCOUNT_PAGE}?t=${_token}" target="_blank"><span class="il">Confirmar</span> mi cuenta</a></p>
                                </ol>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                    <b>Nota:</b> Ésta confirmación se podrá realizar en un período máximo de <b>${days} </b>. En caso de no realizar la confirmación de tu cuenta de correo electrónico dentro del período mencionado, tendrás que registrarte de nuevo, debido a que tu cuenta sería dada de baja.
                                </p>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                    ¡Eso es todo! Una vez confirmanda tu cuenta podras acceder a la plataforma 
                                    <a href="${process.env.APP_WEB_BASE_URL}#/${process.env.APP_WEB_HOME_PAGE}"><span class="il"> ${process.env.APP_NAME}</span> </a>
                                </p>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                    ${_name}, si tienes alguna duda o quieres información adicional, puedes contactar a nuestro equipo de soporte enviando un correo a <a href="mailto:contacto@ruidocx.com" target="_blank">contacto@ruidocx.com</a>.
                                </p>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">Gracias,</p>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                    El equipo de <b>${process.env.APP_NAME}</b>
                                </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </td>
                <td style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0"></td>
            </tr>
        </tbody>
        </table>
        <table style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;width:100%;clear:both!important;margin:0;padding:0">
        <tbody>
            <tr style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0">
                <td style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0"></td>
                <td style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;display:block!important;max-width:600px!important;clear:both!important;margin:0 auto;padding:0"></td>
                <td style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0"></td>
            </tr>
        </tbody>
        </table>
        <img src="https://ea.pstmrk.it/open/v3_WHNBuGW6DmunNak62v9V8Tf3HVAGuIV_oUbyYWJQbYYcNCu5V6E9LU7PGwgbp8OLDYeqY7fDexat27ov2nCeXuvNzLm6B371FCmLa41mOu2dQP3Rm0e6VHglao6hxVYmBkcfT_Ksr0HfoSi7oNMOJG3uTGBORSg0UIL0_WvXze8Iof59Euw6QMXMGwP6l-uxzVJucrgMNCDKHTRiP7HklBTOb2YK1m_fiqhtPevDgsCIaOHETvGhpyrtGAzV0s4Lby-OKk0wzTvcBew8flpF8gED-Ce3Kbugk7-vsa7Dy9nKtJV0xrEBg1ifv2qGdB5gTsy-LZrszc5ahgefNfWr5cKbV4afjH9nJsyglwX7NACWjR79BrOXX2ac5yWIOTtDuvOGkek6TbXu_6XtGM9B9nppcKO7cPUhiS5iVJbw_3Sb8YjygJRWUgaQnH7LRn_dc9zCFOlsZotfb3WELuKaew" width="1" height="1" border="0" alt="" class="CToWUd">
    </div>`;
    return body;
}
/**
* @description Función que regresa el cuerpo del correo de restablecer contraseña en formato HTML
* @param {string} _name ==> nombre del usuario
* @param {string} _logo ==> url de la imagen del logotipo de la empresa o proyecto
* @param {string} _token ==> token generado restablecer contraseña
*/
exports.getBodyResetPassword = (_name, _logo, _token) => {
    const time = moment.duration(process.env.JWT_RESET_EXPIRES_IN);
    var hours = `${time.hours()} horas`;
    const body = `<div bgcolor="#f6f6f6" style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;width:100%!important;height:100%;margin:0;padding:0">
        <table style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;width:100%;margin:0;padding:20px">
        <tbody>
            <tr style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0">
                <td style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0"></td>
                <td bgcolor="#FFFFFF" style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;display:block!important;max-width:600px!important;clear:both!important;margin:0 auto;padding:0;border:1px solid #f0f0f0">
                    <div style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;max-width:600px;display:block;margin:0 auto;padding:20px">
                    <table style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;width:100%;margin:0;padding:0">
                        <tbody>
                            <tr style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0">
                                <td style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0">
                                <img src="${_logo}" style="width:100%;margin-bottom:20px" class="CToWUd a6T" tabindex="0">
                                <div class="a6S" dir="ltr" style="opacity: 0.01; left: 781.667px; top: 205.333px;">
                                    <div id=":2a7" class="T-I J-J5-Ji aQv T-I-ax7 L3 a5q" role="button" tabindex="0" aria-label="Descargar el archivo adjunto " data-tooltip-class="a1V" data-tooltip="Descargar">
                                        <div class="aSK J-J5-Ji aYr"></div>
                                    </div>
                                </div>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">Hola ${_name},</p>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                    ¡Recibimos tu solicitud para restablecer tu contraseña!.
                                </p>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                    Estás a 2 pasos para restablecer tu contraseña:
                                </p>
                                <ol>
                                    <li style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                        <strong>Da clic en el botón de abajo </strong> <span style="font-style:italic"> el cual te mandara a la pagina de ${process.env.APP_NAME} </span>
                                    </li>
                                    <li style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                        <strong>Introduce tu nueva contraseña </strong> <span style="font-style:italic"> debes introducir y confirmar tu nueva contraseña en el formulario y dar clic en Aceptar </span>
                                    </li>
                                    <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0;text-align:center"><a style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;color:#fff;text-decoration:none;font-weight:bold;text-align:center;display:inline-block;border-radius:25px;background-color:#348eda;margin:20px 10px 20px 0;padding:10px 20px" href="${process.env.APP_WEB_BASE_URL}#/${process.env.APP_WEB_PASSWORD_RESET_PAGE}?t=${_token}" target="_blank"><span class="il">Cambiar</span> contraseña</a></p>
                                </ol>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                    <b>Recuerda:</b> tienes <b>${hours} </b> para cambiar tu contraseña. Pasado ese tiempo, tendrás que hacer una nueva solicitud.
                                </p>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                    Despues de restablecer tu contraseña, asegurate de iniciar sesión y confirmar que puedas acceder a la plataforma
                                    <a href="${process.env.APP_WEB_BASE_URL}#/${process.env.APP_WEB_HOME_PAGE}"><span class="il"> ${process.env.APP_NAME}</span> </a>
                                </p>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                    ${_name}, si tienes alguna duda o quieres información adicional, puedes contactar a nuestro equipo de soporte enviando un correo a <a href="mailto:contacto@ruidocx.com" target="_blank">contacto@ruidocx.com</a>.
                                </p>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">Gracias,</p>
                                <p style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.6;font-weight:normal;margin:0 0 10px;padding:0">
                                    El equipo de <b>${process.env.APP_NAME}</b>
                                </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </td>
                <td style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0"></td>
            </tr>
        </tbody>
        </table>
        <table style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;width:100%;clear:both!important;margin:0;padding:0">
        <tbody>
            <tr style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0">
                <td style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0"></td>
                <td style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;display:block!important;max-width:600px!important;clear:both!important;margin:0 auto;padding:0"></td>
                <td style="font-family:'Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif;font-size:100%;line-height:1.6;margin:0;padding:0"></td>
            </tr>
        </tbody>
        </table>
        <img src="https://ea.pstmrk.it/open/v3_WHNBuGW6DmunNak62v9V8Tf3HVAGuIV_oUbyYWJQbYYcNCu5V6E9LU7PGwgbp8OLDYeqY7fDexat27ov2nCeXuvNzLm6B371FCmLa41mOu2dQP3Rm0e6VHglao6hxVYmBkcfT_Ksr0HfoSi7oNMOJG3uTGBORSg0UIL0_WvXze8Iof59Euw6QMXMGwP6l-uxzVJucrgMNCDKHTRiP7HklBTOb2YK1m_fiqhtPevDgsCIaOHETvGhpyrtGAzV0s4Lby-OKk0wzTvcBew8flpF8gED-Ce3Kbugk7-vsa7Dy9nKtJV0xrEBg1ifv2qGdB5gTsy-LZrszc5ahgefNfWr5cKbV4afjH9nJsyglwX7NACWjR79BrOXX2ac5yWIOTtDuvOGkek6TbXu_6XtGM9B9nppcKO7cPUhiS5iVJbw_3Sb8YjygJRWUgaQnH7LRn_dc9zCFOlsZotfb3WELuKaew" width="1" height="1" border="0" alt="" class="CToWUd">
    </div>`;
    return body;
}
/**
* @description Función que se encarga de generar el token
* @param {string} _user ==> correo electronico del usuario
* @param {string} _type ==> tipo de token a generar
*/
exports.createToken = (_user, _type) => {
    let token = jwt.sign(
        { data: _user },
        process.env.JWT_SECRET_KEY,
        { expiresIn: _type == 'login' ? process.env.JWT_LOGIN_EXPIRES_IN : (_type == "account" ? process.env.JWT_ACCOUNT_EXPIRES_IN : process.env.JWT_RESET_EXPIRES_IN) });
    return token;
};
/**
* @description Función que se encarga de encriptar la contraseña
* @param {string} _user ==> correo electronico del usuario
* @param {string} _pass ==> contraseña del usuario
*/
exports.encrypt = (_user, _pass) => {
    // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
    const hmac = crypto.createHmac('sha1', _user).update(_pass).digest('hex');
    return hmac;
}