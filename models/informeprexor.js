const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idInformePrexor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idInformePrexor"
    },
    numeroInforme: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "numeroInforme"
    },
    nMatrizRuido: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nMatrizRuido"
    },
    fechaEmision: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "fechaEmision"
    },
    profesionalTerreno: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "profesionalTerreno"
    },
    generoProfesionalTerreno: {
      type: DataTypes.ENUM('F', 'M', 'O'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "generoProfesionalTerreno"
    },
    profesionalInforme: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "profesionalInforme"
    },
    generoProfesionalInforme: {
      type: DataTypes.ENUM('F', 'M', 'O'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "generoProfesionalInforme"
    },
    cargoProfesionalInforme: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cargoProfesionalInforme"
    },
    nombreSolicitante: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombreSolicitante"
    },
    generoSolicitante: {
      type: DataTypes.ENUM('F', 'M', 'O'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "generoSolicitante"
    },
    cargoSolicitante: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cargoSolicitante"
    },
    nombreAutorizante: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombreAutorizante"
    },
    generoAutorizante: {
      type: DataTypes.ENUM('F', 'M', 'O'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "generoAutorizante"
    },
    nTrabajadoresExpuestos: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nTrabajadoresExpuestos"
    },
    nTrabajadoresEXPMuyBaja: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nTrabajadoresEXPMuyBaja"
    },
    nTrabajadoresEXPBaja: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nTrabajadoresEXPBaja"
    },
    nTrabajadoresEXPMedia: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nTrabajadoresEXPMedia"
    },
    nTrabajadoresEXPAlta: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nTrabajadoresEXPAlta"
    },
    nTrabajadoresEXPMuyAlta: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nTrabajadoresEXPMuyAlta"
    },
    nTrabajadoresEXPRuidoImp: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nTrabajadoresEXPRuidoImp"
    },
    umbralNpsMaqCriticas: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "umbralNpsMaqCriticas"
    }
  };
  const options = {
    tableName: "informeprexor",
    comment: "",
    indexes: []
  };
  const InformeprexorModel = sequelize.define("informeprexor_model", attributes, options);
  return InformeprexorModel;
};