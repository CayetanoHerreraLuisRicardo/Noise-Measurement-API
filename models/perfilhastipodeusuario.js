const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idPerfilHasTipoDeUsuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idPerfilHasTipoDeUsuario"
    },
    idPerfil: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idPerfil",
      references: {
        key: "idPerfil",
        model: "perfil_model"
      }
    },
    idTipoDeUsuario: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idTipoDeUsuario",
      references: {
        key: "idTipoDeUsuario",
        model: "tipodeusuario_model"
      }
    }
  };
  const options = {
    tableName: "perfilhastipodeusuario",
    comment: "",
    indexes: [{
      name: "fk_Perfil_has_TipoDeUsuario_TipoDeUsuario1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idTipoDeUsuario"]
    }, {
      name: "fk_Perfil_has_TipoDeUsuario_Perfil1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idPerfil"]
    }]
  };
  const PerfilhastipodeusuarioModel = sequelize.define("perfilhastipodeusuario_model", attributes, options);
  return PerfilhastipodeusuarioModel;
};