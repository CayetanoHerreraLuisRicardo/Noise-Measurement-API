const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idDocumento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idDocumento"
    },
    idFuente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idFuente",
      references: {
        key: "idFuente",
        model: "fuente_model"
      }
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre"
    },
    documentoPDF: {
      type: blob,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "documentoPDF"
    },
    documentoWord: {
      type: blob,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "documentoWord"
    },
    documentoHTML: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "documentoHTML"
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tipo"
    },
    idTipoDocumento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idTipoDocumento",
      references: {
        key: "idTipoDocumento",
        model: "tipodocumento_model"
      }
    }
  };
  const options = {
    tableName: "documento",
    comment: "",
    indexes: [{
      name: "fk_Documento_Fuente1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idFuente"]
    }, {
      name: "fk_Documento_TipoDocumento1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idTipoDocumento"]
    }]
  };
  const DocumentoModel = sequelize.define("documento_model", attributes, options);
  return DocumentoModel;
};