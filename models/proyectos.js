const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    idproyectos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idproyectos"
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
    descripcion: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "descripcion"
    },
    tipoProyecto: {
      type: DataTypes.ENUM('PREXOR', 'DS38'),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "tipoProyecto"
    },
    idUsers: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idUsers"
    }
  };
  const options = {
    tableName: "proyectos",
    comment: "",
    indexes: []
  };
  const ProyectosModel = sequelize.define("proyectos_model", attributes, options);
  return ProyectosModel;
};