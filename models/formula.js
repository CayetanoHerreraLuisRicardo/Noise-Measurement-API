const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idFormula: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idFormula"
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
    formula: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "formula"
    },
    orden: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "orden"
    }
  };
  const options = {
    tableName: "formula",
    comment: "",
    indexes: [{
      name: "fk_Formula_Fuente1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idFuente"]
    }]
  };
  const FormulaModel = sequelize.define("formula_model", attributes, options);
  return FormulaModel;
};