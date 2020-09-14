const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idActividad: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idActividad",
      unique: "idActividad_UNIQUE"
    },
    idPuestoDeTrabajo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idPuestoDeTrabajo"
    },
    idSucursal: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idSucursal"
    },
    descripcionActividad: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descripcionActividad"
    },
    npsA: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsA"
    },
    npsAEquivalente: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsAEquivalente"
    },
    npsAEquivalenteEstableCopy1: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsAEquivalenteEstableCopy1"
    },
    npsAEquivalenteImpulsivo: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsAEquivalenteImpulsivo"
    },
    npsAMedido: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsAMedido"
    },
    npsAMedidoEstable: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsAMedidoEstable"
    },
    npsAmedidoImpulsivo: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsAmedidoImpulsivo"
    },
    npsC: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsC"
    },
    npsCEquivalente: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsCEquivalente"
    },
    npsCEquivalenteEstable: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsCEquivalenteEstable"
    },
    npsCEquivalenteImpulsivo: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsCEquivalenteImpulsivo"
    },
    npsC_medido: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsC_medido"
    },
    npsCMedidoEstable: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsCMedidoEstable"
    },
    npsCMedidoImpulsivo: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsCMedidoImpulsivo"
    }
  };
  const options = {
    tableName: "actividad",
    comment: "",
    indexes: [{
      name: "fk_Actividad_PuestoDeTrabajo1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idPuestoDeTrabajo"]
    }, {
      name: "fk_Actividad_Sucursal1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idSucursal"]
    }]
  };
  const ActividadModel = sequelize.define("actividad_model", attributes, options);
  return ActividadModel;
};