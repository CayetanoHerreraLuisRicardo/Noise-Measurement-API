const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idImagenHasEtiqueta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idImagenHasEtiqueta"
    },
    idImagen: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idImagen",
      references: {
        key: "idImagen",
        model: "imagen_model"
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
    tableName: "imagenhasetiqueta",
    comment: "",
    indexes: [{
      name: "fk_Imagen_has_Etiqueta_Etiqueta1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idEtiqueta"]
    }, {
      name: "fk_Imagen_has_Etiqueta_Imagen1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idImagen"]
    }]
  };
  const ImagenhasetiquetaModel = sequelize.define("imagenhasetiqueta_model", attributes, options);
  return ImagenhasetiquetaModel;
};