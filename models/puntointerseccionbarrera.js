const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idPuntoInterseccionBarrera: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idPuntoInterseccionBarrera"
    },
    idBarrera: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idBarrera"
    },
    idReceptor: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idReceptor"
    },
    coordNorte: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "coordNorte"
    },
    coordEste: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "coordEste"
    }
  };
  const options = {
    tableName: "puntointerseccionbarrera",
    comment: "",
    indexes: [{
      name: "fk_PuntoInterseccionBarrera_Barrera1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idBarrera"]
    }, {
      name: "fk_PuntoInterseccionBarrera_Receptor1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idReceptor"]
    }]
  };
  const PuntointerseccionbarreraModel = sequelize.define("puntointerseccionbarrera_model", attributes, options);
  return PuntointerseccionbarreraModel;
};