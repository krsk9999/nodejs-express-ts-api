const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rol_permiso', {
    IDRol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'rol',
        key: 'ID'
      }
    },
    IDPermiso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'permiso',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'rol_permiso',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IDRol" },
          { name: "IDPermiso" },
        ]
      },
      {
        name: "FK_Rol_Permiso_Permiso",
        using: "BTREE",
        fields: [
          { name: "IDPermiso" },
        ]
      },
    ]
  });
};
