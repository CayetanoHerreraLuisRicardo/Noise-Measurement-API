const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idMaquinasDeRuidoPrincipales: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idMaquinasDeRuidoPrincipales"
    },
    nombreMaquina: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombreMaquina"
    },
    nps: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nps"
    },
    nAfectados: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nAfectados"
    },
    causas: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "causas"
    },
    idMaquina: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idMaquina",
      references: {
        key: "idMaquina",
        model: "maquina_model"
      }
    }
  };
  const options = {
    tableName: "maquinasderuidoprincipales",
    comment: "",
    indexes: [{
      name: "fk_maquinasRuido_idx",
      unique: false,
      type: "BTREE",
      fields: ["idMaquina"]
    }]
  };
  const MaquinasderuidoprincipalesModel = sequelize.define("maquinasderuidoprincipales_model", attributes, options);
  return MaquinasderuidoprincipalesModel;
};