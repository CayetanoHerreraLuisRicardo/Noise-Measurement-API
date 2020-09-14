const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idSucursal: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idSucursal",
      unique: "idSucursal_UNIQUE"
    },
    nombreSucursal: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombreSucursal"
    },
    direccionSucursal: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "`db_ruidocx`.`empresa` `nombre`",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "direccionSucursal"
    },
    idProyecto: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idProyecto"
    },
    idEmpresa: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idEmpresa",
      references: {
        key: "idEmpresa",
        model: "empresa_model"
      }
    }
  };
  const options = {
    tableName: "sucursal",
    comment: "",
    indexes: [{
      name: "fk_Sucursal_Empresa1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idEmpresa"]
    }, {
      name: "fk_proyecto_idx",
      unique: false,
      type: "BTREE",
      fields: ["idProyecto"]
    }]
  };
  const SucursalModel = sequelize.define("sucursal_model", attributes, options);
  return SucursalModel;
};