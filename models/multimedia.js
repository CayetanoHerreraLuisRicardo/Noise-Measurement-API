const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idMultimedia: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idMultimedia",
      unique: "idMultimedia_UNIQUE"
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tipo"
    },
    url: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "url"
    }
  };
  const options = {
    tableName: "multimedia",
    comment: "",
    indexes: []
  };
  const MultimediaModel = sequelize.define("multimedia_model", attributes, options);
  return MultimediaModel;
};