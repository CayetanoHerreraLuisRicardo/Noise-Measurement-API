const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idRecinto: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idRecinto",
      unique: "idRecinto_UNIQUE"
    },
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descripcion"
    },
    largo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "largo"
    },
    ancho: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ancho"
    },
    alto: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "alto"
    },
    idSucursal: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idSucursal",
      references: {
        key: "idSucursal",
        model: "sucursal_model"
      }
    },
    idRecintoPadre: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idRecintoPadre",
      references: {
        key: "idRecinto",
        model: "recinto_model"
      }
    }
  };
  const options = {
    tableName: "recinto",
    comment: "",
    indexes: [{
      name: "fk_Recinto_Sucursal1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idSucursal"]
    }, {
      name: "fk_Recinto_Recinto1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idRecintoPadre"]
    }]
  };
  const RecintoModel = sequelize.define("recinto_model", attributes, options);
  return RecintoModel;
};