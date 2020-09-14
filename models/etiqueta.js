const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idEtiqueta: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idEtiqueta",
      unique: "idEtiqueta_UNIQUE"
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descripcion"
    },
    idSucursal: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idSucursal",
      references: {
        key: "idSucursal",
        model: "sucursal_model"
      }
    }
  };
  const options = {
    tableName: "etiqueta",
    comment: "",
    indexes: [{
      name: "fk_Etiqueta_Sucursal1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idSucursal"]
    }]
  };
  const EtiquetaModel = sequelize.define("etiqueta_model", attributes, options);
  return EtiquetaModel;
};