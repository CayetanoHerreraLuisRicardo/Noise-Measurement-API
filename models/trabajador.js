const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idTrabajador: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idTrabajador",
      unique: "idTrabajador_UNIQUE"
    },
    rut: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "rut"
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre"
    },
    cargorrhh: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cargorrhh"
    },
    representativo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "representativo"
    },
    idSucursal: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idSucursal",
      references: {
        key: "idSucursal",
        model: "sucursal_model"
      }
    },
    idPuestoDeTrabajo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idPuestoDeTrabajo",
      references: {
        key: "idPuestoDeTrabajo",
        model: "puestodetrabajo_model"
      }
    },
    idGes: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idGes",
      references: {
        key: "idGes",
        model: "ges_model"
      }
    },
    idUsuario: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idUsuario",
      references: {
        key: "idUsers",
        model: "users_model"
      }
    }
  };
  const options = {
    tableName: "trabajador",
    comment: "",
    indexes: [{
      name: "fk_Trabajador_Grupo1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idGes"]
    }, {
      name: "fk_Trabajador_Usuarios1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idUsuario"]
    }, {
      name: "fk_Trabajador_PuestoDeTrabajo1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idPuestoDeTrabajo"]
    }, {
      name: "fk_Trabajador_Sucursal1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idSucursal"]
    }]
  };
  const TrabajadorModel = sequelize.define("trabajador_model", attributes, options);
  return TrabajadorModel;
};