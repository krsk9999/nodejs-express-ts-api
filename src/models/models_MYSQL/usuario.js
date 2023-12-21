const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USER: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    STATUS: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    CREATEDDATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    rol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'rol',
        key: 'ID'
      }
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
    tableName: 'usuario',
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
        name: "FK_USUARIO_Rol",
        using: "BTREE",
        fields: [
          { name: "rol" },
        ]
      },
      {
        name: "fk_usuario_usuario",
        using: "BTREE",
        fields: [
          { name: "UsuarioModificacion" },
        ]
      },
    ]
  });
};
