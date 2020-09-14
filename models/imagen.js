const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idImagen: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idImagen",
      unique: "idImagen_UNIQUE"
    },
    tipoImagen: {
      type: DataTypes.ENUM('FOTO', 'LAYOUT'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tipoImagen"
    },
    url: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "url"
    },
    idSucursal: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
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
    idRecinto: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idRecinto",
      references: {
        key: "idRecinto",
        model: "recinto_model"
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
    tableName: "imagen",
    comment: "",
    indexes: [{
      name: "fk_Imagen_Sucursal1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idSucursal"]
    }, {
      name: "fk_Imagen_Recinto1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idRecinto"]
    }, {
      name: "fk_Imagen_Maquina1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idMaquina"]
    }]
  };
  const ImagenModel = sequelize.define("imagen_model", attributes, options);
  return ImagenModel;
};