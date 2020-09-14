const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idPerfil: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idPerfil",
      unique: "idPerfil_UNIQUE"
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
    tableName: "perfil",
    comment: "",
    indexes: []
  };
  const PerfilModel = sequelize.define("perfil_model", attributes, options);
  return PerfilModel;
};