const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idImagenProyecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idImagenProyecto"
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
        model: "imagen1_model"
      }
    },
    idProyecto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idProyecto",
      references: {
        key: "idproyectos",
        model: "proyectos_model"
      }
    }
  };
  const options = {
    tableName: "imagenproyecto",
    comment: "",
    indexes: [{
      name: "idForaneoProyectos_idx",
      unique: false,
      type: "BTREE",
      fields: ["idProyecto"]
    }, {
      name: "idForaneoImagen_idx",
      unique: false,
      type: "BTREE",
      fields: ["idImagen"]
    }]
  };
  const ImagenproyectoModel = sequelize.define("imagenproyecto_model", attributes, options);
  return ImagenproyectoModel;
};