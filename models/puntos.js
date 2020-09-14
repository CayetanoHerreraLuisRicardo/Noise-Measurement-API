const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idPuntos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idPuntos",
      unique: "idPuntos_UNIQUE"
    },
    saldo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "saldo"
    },
    idUsuario: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idUsuario",
      references: {
        key: "idUsers",
        model: "users_model"
      }
    }
  };
  const options = {
    tableName: "puntos",
    comment: "",
    indexes: [{
      name: "fk_Puntos_Usuarios1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idUsuario"]
    }]
  };
  const PuntosModel = sequelize.define("puntos_model", attributes, options);
  return PuntosModel;
};