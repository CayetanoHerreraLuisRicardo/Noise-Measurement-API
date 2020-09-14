const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idProtectorAuditivo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idProtectorAuditivo"
    },
    marca: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "marca"
    },
    modelo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "modelo"
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tipo"
    },
    certificacion: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "certificacion"
    },
    certificacionISP: {
      type: DataTypes.ENUM('SI', 'NO'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "certificacionISP"
    },
    idTrabajador: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idTrabajador",
      references: {
        key: "idTrabajador",
        model: "trabajador_model"
      }
    }
  };
  const options = {
    tableName: "protectorauditivo",
    comment: "",
    indexes: [{
      name: "fk_trabajador_idx",
      unique: false,
      type: "BTREE",
      fields: ["idTrabajador"]
    }]
  };
  const ProtectorauditivoModel = sequelize.define("protectorauditivo_model", attributes, options);
  return ProtectorauditivoModel;
};