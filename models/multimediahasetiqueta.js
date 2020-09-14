const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idMultimediaHasEtiqueta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idMultimediaHasEtiqueta"
    },
    idMultimedia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
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
    idEtiqueta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idEtiqueta",
      references: {
        key: "idEtiqueta",
        model: "etiqueta_model"
      }
    }
  };
  const options = {
    tableName: "multimediahasetiqueta",
    comment: "",
    indexes: [{
      name: "idFMultimedia_idx",
      unique: false,
      type: "BTREE",
      fields: ["idMultimedia"]
    }, {
      name: "idFEtiqueta_idx",
      unique: false,
      type: "BTREE",
      fields: ["idEtiqueta"]
    }]
  };
  const MultimediahasetiquetaModel = sequelize.define("multimediahasetiqueta_model", attributes, options);
  return MultimediahasetiquetaModel;
};