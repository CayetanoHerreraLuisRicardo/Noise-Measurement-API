const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idPuestoDeTrabajo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idPuestoDeTrabajo",
      unique: "idPuestoDeTrabajo_UNIQUE"
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
    cargo: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "cargo"
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
    dosis: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "dosis"
    },
    idProtectorAuditivoInicial: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idProtectorAuditivoInicial",
      references: {
        key: "idProtectorAuditivo",
        model: "protectorauditivo_model"
      }
    },
    idProtectorAuditivoFinal: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idProtectorAuditivoFinal",
      references: {
        key: "idProtectorAuditivo",
        model: "protectorauditivo_model"
      }
    },
    npsPromedio: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "npsPromedio"
    },
    tiempoDeExposicion: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "0.00",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tiempoDeExposicion"
    }
  };
  const options = {
    tableName: "puestodetrabajo",
    comment: "",
    indexes: [{
      name: "fk_PuestoDeTrabajo_Recinto1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idRecinto"]
    }, {
      name: "fk_PuestoDeTrabajo_Sucursal1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idSucursal"]
    }, {
      name: "fk_PuestoDeTrabajo_ProtectorAuditivo1_idx",
      unique: false,
      type: "BTREE",
      fields: ["idProtectorAuditivoInicial"]
    }, {
      name: "fk_PuestoDeTrabajo_ProtectorAuditivo2_idx",
      unique: false,
      type: "BTREE",
      fields: ["idProtectorAuditivoFinal"]
    }]
  };
  const PuestodetrabajoModel = sequelize.define("puestodetrabajo_model", attributes, options);
  return PuestodetrabajoModel;
};