const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idBarrera: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idBarrera"
    },
    idFuente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
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
    coordNorteInicio: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "coordNorteInicio"
    },
    coordEsteInicio: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "coordEsteInicio"
    },
    coordNorteFin: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "coordNorteFin"
    },
    coordEsteFin: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "coordEsteFin"
    },
    altura: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "altura"
    },
    atenuacionPorDifraccion: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "atenuacionPorDifraccion"
    }
  };
  const options = {
    tableName: "barrera",
    comment: "",
    indexes: [{
      name: "fk_Barrera_Fuente1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idFuente"]
    }]
  };
  const BarreraModel = sequelize.define("barrera_model", attributes, options);
  return BarreraModel;
};