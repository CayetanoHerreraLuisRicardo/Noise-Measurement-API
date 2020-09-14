const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idSolucion: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idSolucion",
      unique: "idSolucion_UNIQUE"
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
    tableName: "solucion",
    comment: "",
    indexes: [{
      name: "fk_Solucion_Sucursal1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idSucursal"]
    }]
  };
  const SolucionModel = sequelize.define("solucion_model", attributes, options);
  return SolucionModel;
};