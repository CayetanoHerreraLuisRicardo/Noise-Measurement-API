const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idTipoDocumento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idTipoDocumento"
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
    tableName: "tipodocumento",
    comment: "",
    indexes: []
  };
  const TipodocumentoModel = sequelize.define("tipodocumento_model", attributes, options);
  return TipodocumentoModel;
};