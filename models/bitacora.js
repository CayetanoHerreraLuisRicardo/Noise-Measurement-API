const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idBitacora: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idBitacora",
      unique: "idBitacora_UNIQUE"
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
    tipoMovimiento: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tipoMovimiento"
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "fecha"
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "hora"
    },
    idUsuario: {
      type: DataTypes.BIGINT,
      allowNull: false,
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
    tableName: "bitacora",
    comment: "",
    indexes: [{
      name: "fk_Bitacora_Sucursal1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idSucursal"]
    }, {
      name: "fk_Bitacora_Usuarios1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idUsuario"]
    }]
  };
  const BitacoraModel = sequelize.define("bitacora_model", attributes, options);
  return BitacoraModel;
};