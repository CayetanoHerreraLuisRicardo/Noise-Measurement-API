const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idMultimediaHasTipoDeUsuario: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idMultimediaHasTipoDeUsuario"
    },
    idMultimedia: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idMultimedia",
      references: {
        key: "idMultimedia",
        model: "multimedia_model"
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
    tableName: "multimediahastipodeusuario",
    comment: "",
    indexes: [{
      name: "fk_Multimedia_has_TipoDeUsuario_TipoDeUsuario1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idTipoDeUsuario"]
    }, {
      name: "fk_Multimedia_has_TipoDeUsuario_Multimedia1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idMultimedia"]
    }]
  };
  const MultimediahastipodeusuarioModel = sequelize.define("multimediahastipodeusuario_model", attributes, options);
  return MultimediahastipodeusuarioModel;
};