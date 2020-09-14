const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idFuentesMaquinas: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idFuentesMaquinas"
    },
    idFuente: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
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
    }
  };
  const options = {
    tableName: "fuentesmaquinas",
    comment: "",
    indexes: [{
      name: "fk_fuente_idx",
      unique: false,
      type: "BTREE",
      fields: ["idFuente"]
    }, {
      name: "fk_maquina_idx",
      unique: false,
      type: "BTREE",
      fields: ["idMaquina"]
    }]
  };
  const FuentesmaquinasModel = sequelize.define("fuentesmaquinas_model", attributes, options);
  return FuentesmaquinasModel;
};