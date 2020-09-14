const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idComuna: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idComuna"
    },
    nombreComuna: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombreComuna"
    }
  };
  const options = {
    tableName: "comunas",
    comment: "",
    indexes: []
  };
  const ComunasModel = sequelize.define("comunas_model", attributes, options);
  return ComunasModel;
};