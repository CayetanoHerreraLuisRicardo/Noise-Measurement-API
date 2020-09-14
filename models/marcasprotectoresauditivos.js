const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idMarcaProtectorAuditivo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idMarcaProtectorAuditivo"
    },
    nombreMarcaPA: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombreMarcaPA"
    },
    nombreModeloPA: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombreModeloPA"
    },
    nombreTipoPA: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombreTipoPA"
    }
  };
  const options = {
    tableName: "marcasprotectoresauditivos",
    comment: "",
    indexes: []
  };
  const MarcasprotectoresauditivosModel = sequelize.define("marcasprotectoresauditivos_model", attributes, options);
  return MarcasprotectoresauditivosModel;
};