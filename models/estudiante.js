'use strict';
module.exports = function(sequelize, DataTypes) {
  var estudiante = sequelize.define('estudiantes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    cedula: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return estudiante;
};