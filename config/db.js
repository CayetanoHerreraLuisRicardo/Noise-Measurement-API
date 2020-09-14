/********** Importamos el módulo Sequelize ORM para la conexión a la base de datos MySQL **********/
const { Sequelize } = require('sequelize');
/********** Objeto sequelize que contiene los datos de conexión **********/
const sequelize = new Sequelize(process.env.DB_SOURCE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
/********** Verificamos que la conexión sea exitosa **********/
try {
    sequelize.authenticate();
    console.log('Conexión exitosa.');
} catch (e) {
    console.error('La conexiÓn con la base de datos falló:', e);
}
/********** Importamos los modelos(tablas) mapeados de la base de datos **********/
const usersModel = require('../models/users');
const users = usersModel(sequelize);

const sucursalModel = require('../models/sucursal');
const sucursal = sucursalModel(sequelize);

const fuenteModel = require('../models/fuente');
const fuente = fuenteModel(sequelize);

const receptorModel = require('../models/receptor');
const receptor = receptorModel(sequelize);

const imagen1Model = require('../models/imagen1');
const imagen1 = imagen1Model(sequelize);

const formulaModel = require('../models/formula');
const formula = formulaModel(sequelize);

const barreraModel = require('../models/barrera');
const barrera = barreraModel(sequelize);

const interseccionModel = require('../models/puntointerseccionbarrera');
const interseccion = interseccionModel(sequelize);

const valorespredefinidosModel = require('../models/valorespredefinidos');
const valorespredefinidos = valorespredefinidosModel(sequelize);

const proyectosModel = require('../models/proyectos');
const proyectos = proyectosModel(sequelize);

/********** Exportamos todos los modelos a utlizar en nuestro proyecto **********/
module.exports = {
    sequelize,
    users,
    sucursal,
    fuente,
    receptor,
    imagen1,
    formula,
    barrera,
    interseccion,
    valorespredefinidos,
    proyectos
};