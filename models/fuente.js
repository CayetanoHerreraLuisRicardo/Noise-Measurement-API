const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idFuente: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idFuente"
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
    coordNorte: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "coordNorte"
    },
    coordEste: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "coordEste"
    },
    lugar: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "lugar"
    },
    nps: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nps"
    },
    distanciaInicial: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "distanciaInicial"
    },
    limiteCircunferencia: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "limiteCircunferencia"
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
    }
  };
  const options = {
    tableName: "fuente",
    comment: "",
    indexes: [{
      name: "fk_Fuente_usuario_idx",
      unique: false,
      type: "BTREE",
      fields: ["idUsuario"]
    }, {
      name: "fk_sucursal_idx",
      unique: false,
      type: "BTREE",
      fields: ["idSucursal"]
    }]
  };
  const FuenteModel = sequelize.define("fuente_model", attributes, options);
  return FuenteModel;
};