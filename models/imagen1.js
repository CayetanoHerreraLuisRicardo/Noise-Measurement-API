const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idImagen: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idImagen"
    },
    idFuente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idFuente"
    },
    idReceptor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idReceptor"
    },
    imagen: {
      type: DataTypes.BLOB('tiny'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "imagen"
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "url"
    }
  };
  const options = {
    tableName: "imagen1",
    comment: "",
    indexes: [{
      name: "fk_Imagen_Fuente1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idFuente"]
    }, {
      name: "fk_Imagen_Receptor1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idReceptor"]
    }]
  };
  const Imagen1Model = sequelize.define("imagen1_model", attributes, options);
  return Imagen1Model;
};