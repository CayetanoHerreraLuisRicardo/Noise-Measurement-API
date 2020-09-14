const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idDocumentoSeccion: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idDocumentoSeccion"
    },
    idDocumento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idDocumento",
      references: {
        key: "idDocumento",
        model: "documento_model"
      }
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "html"
    },
    orden: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "orden"
    }
  };
  const options = {
    tableName: "documentoseccion",
    comment: "",
    indexes: [{
      name: "fk_DocumentoSeccion_Documento1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idDocumento"]
    }]
  };
  const DocumentoseccionModel = sequelize.define("documentoseccion_model", attributes, options);
  return DocumentoseccionModel;
};