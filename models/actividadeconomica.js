const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idActividadEconomica: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idActividadEconomica"
    },
    nombreActividadE: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombreActividadE"
    }
  };
  const options = {
    tableName: "actividadeconomica",
    comment: "",
    indexes: []
  };
  const ActividadeconomicaModel = sequelize.define("actividadeconomica_model", attributes, options);
  return ActividadeconomicaModel;
};