const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idGes: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idGes",
      unique: "idGrupo_UNIQUE"
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
    idSolucion: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idSolucion",
      references: {
        key: "idSolucion",
        model: "solucion_model"
      }
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
    dosisPorJornada: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dosisPorJornada"
    },
    idNivelExposicion: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idNivelExposicion"
    },
    numeroTrabajadores: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "numeroTrabajadores"
    },
    trabajadoresConEPA: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "trabajadoresConEPA"
    },
    evaluacion: {
      type: DataTypes.ENUM('sobre CA', 'bajo CA'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "evaluacion"
    },
    respectoPVSA: {
      type: DataTypes.ENUM('ingresa PVSA', 'continua PVSA'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "respectoPVSA"
    }
  };
  const options = {
    tableName: "ges",
    comment: "",
    indexes: [{
      name: "fk_Grupo_Solucion1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idSolucion"]
    }, {
      name: "fk_Grupo_Sucursal1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idSucursal"]
    }]
  };
  const GesModel = sequelize.define("ges_model", attributes, options);
  return GesModel;
};