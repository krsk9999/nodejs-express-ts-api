const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bitacora', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'ID'
      }
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Accion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Detalle: {
      type: DataTypes.STRING(1025),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bitacora',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
      {
        name: "FK_Bitacora_Usuario",
        using: "BTREE",
        fields: [
          { name: "Usuario" },
        ]
      },
    ]
  });
};
