const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idCompraPuntos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idCompraPuntos",
      unique: "idCompraPuntos_UNIQUE"
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
    idTransaccion: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idTransaccion"
    },
    estatus: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "estatus"
    },
    importe: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "importe"
    },
    cantidadPuntos: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cantidadPuntos"
    }
  };
  const options = {
    tableName: "comprapuntos",
    comment: "",
    indexes: []
  };
  const ComprapuntosModel = sequelize.define("comprapuntos_model", attributes, options);
  return ComprapuntosModel;
};