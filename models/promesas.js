const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idPromesa: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idPromesa"
    },
    idProyecto: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idProyecto"
    },
    idRequerimiento: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idRequerimiento"
    }
  };
  const options = {
    tableName: "promesas",
    comment: "",
    indexes: []
  };
  const PromesasModel = sequelize.define("promesas_model", attributes, options);
  return PromesasModel;
};