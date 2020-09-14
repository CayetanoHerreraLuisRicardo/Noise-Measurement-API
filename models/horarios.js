const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idHorarios: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idHorarios"
    },
    LunesAViernes: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "LunesAViernes"
    },
    horaInicioLV: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "horaInicioLV"
    },
    horaTerminoLV: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "horaTerminoLV"
    },
    horaDeColacionLV: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "horaDeColacionLV"
    },
    Sabados: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Sabados"
    },
    horaInicioS: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "horaInicioS"
    },
    horaTermino: {
      type: DataTypes.TIME,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "horaTermino"
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
    }
  };
  const options = {
    tableName: "horarios",
    comment: "",
    indexes: [{
      name: "fk_ges",
      unique: false,
      type: "BTREE",
      fields: ["idGes"]
    }]
  };
  const HorariosModel = sequelize.define("horarios_model", attributes, options);
  return HorariosModel;
};