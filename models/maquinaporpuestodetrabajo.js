const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idMaquinaPorPuestoDeTrabajo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idMaquinaPorPuestoDeTrabajo"
    },
    idMaquina: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idMaquina",
      references: {
        key: "idMaquina",
        model: "maquina_model"
      }
    },
    idPuestoDeTrabajo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idPuestoDeTrabajo",
      references: {
        key: "idPuestoDeTrabajo",
        model: "puestodetrabajo_model"
      }
    }
  };
  const options = {
    tableName: "maquinaporpuestodetrabajo",
    comment: "",
    indexes: [{
      name: "fk_Maquina_has_PuestoDeTrabajo_PuestoDeTrabajo1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idPuestoDeTrabajo"]
    }, {
      name: "fk_Maquina_has_PuestoDeTrabajo_Maquina1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idMaquina"]
    }]
  };
  const MaquinaporpuestodetrabajoModel = sequelize.define("maquinaporpuestodetrabajo_model", attributes, options);
  return MaquinaporpuestodetrabajoModel;
};