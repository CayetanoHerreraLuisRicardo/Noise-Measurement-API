const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idValoresPredefinidos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idValoresPredefinidos"
    },
    idFuente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idFuente",
      references: {
        key: "idFuente",
        model: "fuente_model"
      }
    },
    nps: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nps"
    },
    distanciaInicial: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "distanciaInicial"
    }
  };
  const options = {
    tableName: "valorespredefinidos",
    comment: "",
    indexes: [{
      name: "fk_ValoresPredeinidos_Fuente1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idFuente"]
    }]
  };
  const ValorespredefinidosModel = sequelize.define("valorespredefinidos_model", attributes, options);
  return ValorespredefinidosModel;
};