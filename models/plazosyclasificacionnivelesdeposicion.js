const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idPlazosYClasificacionNiveles: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idPlazosYClasificacionNiveles"
    },
    exposicion: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "exposicion"
    },
    limiteSuperior: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "limiteSuperior"
    },
    limiteInferior: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "limiteInferior"
    },
    plazos: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "plazos"
    },
    ingresa: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ingresa"
    }
  };
  const options = {
    tableName: "plazosyclasificacionnivelesdeposicion",
    comment: "",
    indexes: []
  };
  const PlazosyclasificacionnivelesdeposicionModel = sequelize.define("plazosyclasificacionnivelesdeposicion_model", attributes, options);
  return PlazosyclasificacionnivelesdeposicionModel;
};