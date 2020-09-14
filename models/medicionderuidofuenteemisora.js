const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idMedicionDeRuidoFuenteEmisora: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idMedicionDeRuidoFuenteEmisora"
    },
    idReceptor: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idReceptor"
    },
    tipoMedicion: {
      type: DataTypes.ENUM('INTERNA', 'EXTERNA'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tipoMedicion"
    },
    ventana: {
      type: DataTypes.ENUM('ABIERTA', 'CERRADA'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ventana"
    },
    modelacionIso9613: {
      type: DataTypes.ENUM('SI', 'NO'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "modelacionIso9613"
    },
    punto: {
      type: DataTypes.ENUM('1', '2', '3'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "punto"
    },
    npsEq1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "0.0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsEq1"
    },
    npsEq2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "0.0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsEq2"
    },
    npsEq3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "0.0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsEq3"
    },
    npsMin1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "0.0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsMin1"
    },
    npsMin2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "0.0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsMin2"
    },
    npsMin3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "0.0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsMin3"
    },
    npsMaxF1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "0.0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsMaxF1"
    },
    npsMaxF2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "0.0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsMaxF2"
    },
    npsMaxF3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "0.0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsMaxF3"
    },
    npsMax-5F1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsMax-5F1"
    },
    npsMax-5F2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsMax-5F2"
    },
    npsMax-5F3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsMax-5F3"
    },
    mayorF1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "mayorF1"
    },
    mayorF2: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "mayorF2"
    },
    mayorF3: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "mayorF3"
    },
    promedio: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "promedio"
    },
    suma: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "suma"
    },
    correccion: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "correccion"
    },
    correcionRuidoF: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "0.0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "correcionRuidoF"
    },
    correcionVentana: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: "0.0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "correcionVentana"
    },
    diferencia: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "diferencia"
    },
    ruidoFondoSuma: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ruidoFondoSuma"
    },
    ruidoFondoCorregido: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ruidoFondoCorregido"
    }
  };
  const options = {
    tableName: "medicionderuidofuenteemisora",
    comment: "",
    indexes: []
  };
  const MedicionderuidofuenteemisoraModel = sequelize.define("medicionderuidofuenteemisora_model", attributes, options);
  return MedicionderuidofuenteemisoraModel;
};