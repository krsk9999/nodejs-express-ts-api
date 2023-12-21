const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agendaelectronica', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    fechaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    horaInicio: {
      type: DataTypes.TIME,
      allowNull: false
    },
    fechaFinal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    horaFinal: {
      type: DataTypes.TIME,
      allowNull: false
    },
    paciente: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'agendaelectronica',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_agendaelectronica_usuario",
        using: "BTREE",
        fields: [
          { name: "usuario" },
        ]
      },
    ]
  });
};
