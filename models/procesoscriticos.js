const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idProcesosCriticos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idProcesosCriticos"
    },
    nombreProceso: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombreProceso"
    },
    nombreMaquina: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombreMaquina"
    }
  };
  const options = {
    tableName: "procesoscriticos",
    comment: "",
    indexes: []
  };
  const ProcesoscriticosModel = sequelize.define("procesoscriticos_model", attributes, options);
  return ProcesoscriticosModel;
};