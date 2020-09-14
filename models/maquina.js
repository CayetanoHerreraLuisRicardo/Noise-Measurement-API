const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idMaquina: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idMaquina",
      unique: "idMaquina_UNIQUE"
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nombre"
    },
    marca: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "marca"
    },
    modelo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "modelo"
    },
    nps: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nps"
    },
    distanciaInicial: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "distanciaInicial"
    },
    coordenadaNorte: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "coordenadaNorte"
    },
    coordenadaEste: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "coordenadaEste"
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
    potenciaAcustica: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "potenciaAcustica"
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
    }
  };
  const options = {
    tableName: "maquina",
    comment: "",
    indexes: [{
      name: "fk_Maquina_Sucursal1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idSucursal"]
    }]
  };
  const MaquinaModel = sequelize.define("maquina_model", attributes, options);
  return MaquinaModel;
};