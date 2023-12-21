const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expediente', {
    FechaVisita: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    Identificacion: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'paciente',
        key: 'Identificacion'
      }
    },
    PadecimientoActual: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    PA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Pulso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Sat: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Temperatura: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    Glicemia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Peso: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    Talla: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    IMC: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    FUR: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FUPAP: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FUMMG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OtrosExamen: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    Diagnostico: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    Medicamento: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    Laboratorio: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    Referencia: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    Gabinete: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    Seguimiento: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    CorreoSeguimiento: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    LlamadaSeguimiento: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'expediente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "FechaVisita" },
          { name: "Identificacion" },
        ]
      },
      {
        name: "FK_Expediente_Paciente",
        using: "BTREE",
        fields: [
          { name: "Identificacion" },
        ]
      },
    ]
  });
};
