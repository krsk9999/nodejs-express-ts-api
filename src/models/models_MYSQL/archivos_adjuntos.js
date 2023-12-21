const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('archivos_adjuntos', {
    Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    Ruta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    FechaVisita: {
      type: DataTypes.DATE,
      allowNull: false,
      references: {
        model: 'expediente',
        key: 'FechaVisita'
      }
    },
    Identificacion: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'expediente',
        key: 'Identificacion'
      }
    }
  }, {
    sequelize,
    tableName: 'archivos_adjuntos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Id" },
        ]
      },
      {
        name: "fk_archivos_adjuntos_expediente",
        using: "BTREE",
        fields: [
          { name: "FechaVisita" },
          { name: "Identificacion" },
        ]
      },
    ]
  });
};
