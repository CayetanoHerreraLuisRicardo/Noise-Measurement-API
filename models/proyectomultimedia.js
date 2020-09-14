const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idProyectoMultimedia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idProyectoMultimedia"
    },
    idProyecto: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idProyecto",
      references: {
        key: "idproyectos",
        model: "proyectos_model"
      }
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
    }
  };
  const options = {
    tableName: "proyectomultimedia",
    comment: "",
    indexes: [{
      name: "idForaneoProyectos_idx",
      unique: false,
      type: "BTREE",
      fields: ["idProyecto"]
    }, {
      name: "idForaneoMultimedia_idx",
      unique: false,
      type: "BTREE",
      fields: ["idMultimedia"]
    }]
  };
  const ProyectomultimediaModel = sequelize.define("proyectomultimedia_model", attributes, options);
  return ProyectomultimediaModel;
};