const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('paciente', {
    Identificacion: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    Genero: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FechaNacimiento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Domicilio: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    Provincia: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Telefono: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    Celular: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    APP: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    ANPP: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    AQT: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    AlergiaMedicamento: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    RiesgoEmbarazo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Vacunas: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    AntecedentesPerinatales: {
      type: DataTypes.STRING(2048),
      allowNull: true
    },
    FechaRegistro: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CorreoInicioEnviado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    Correo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UsuarioModificacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'ID'
      }
    },
    FechaModificacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'paciente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Identificacion" },
        ]
      },
      {
        name: "fk_paciente_usuario",
        using: "BTREE",
        fields: [
          { name: "UsuarioModificacion" },
        ]
      },
    ]
  });
};
