const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idUsersCompraPuntos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idUsersCompraPuntos"
    },
    idUsers: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idUsers"
    },
    idCompraPuntos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idCompraPuntos"
    }
  };
  const options = {
    tableName: "userscomprapuntos",
    comment: "",
    indexes: [{
      name: "idForaneoUsers_idx",
      unique: false,
      type: "BTREE",
      fields: ["idUsers"]
    }, {
      name: "idForaneoCompraPuntos_idx",
      unique: false,
      type: "BTREE",
      fields: ["idCompraPuntos"]
    }]
  };
  const UserscomprapuntosModel = sequelize.define("userscomprapuntos_model", attributes, options);
  return UserscomprapuntosModel;
};