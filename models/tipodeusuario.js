const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idTipoDeUsuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idTipoDeUsuario",
      unique: "idTipoDeUsuario_UNIQUE"
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descripcion"
    }
  };
  const options = {
    tableName: "tipodeusuario",
    comment: "",
    indexes: []
  };
  const TipodeusuarioModel = sequelize.define("tipodeusuario_model", attributes, options);
  return TipodeusuarioModel;
};