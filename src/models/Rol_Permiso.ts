import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Permiso, PermisoId } from './Permiso';
import type { Rol, RolId } from './Rol';

export interface Rol_PermisoAttributes {
  IDRol: number;
  IDPermiso: number;
}

export type Rol_PermisoPk = "IDRol" | "IDPermiso";
export type Rol_PermisoId = Rol_Permiso[Rol_PermisoPk];
export type Rol_PermisoCreationAttributes = Rol_PermisoAttributes;

export class Rol_Permiso extends Model<Rol_PermisoAttributes, Rol_PermisoCreationAttributes> implements Rol_PermisoAttributes {
  IDRol!: number;
  IDPermiso!: number;

  // Rol_Permiso belongsTo Permiso via IDPermiso
  IDPermiso_Permiso!: Permiso;
  getIDPermiso_Permiso!: Sequelize.BelongsToGetAssociationMixin<Permiso>;
  setIDPermiso_Permiso!: Sequelize.BelongsToSetAssociationMixin<Permiso, PermisoId>;
  createIDPermiso_Permiso!: Sequelize.BelongsToCreateAssociationMixin<Permiso>;
  // Rol_Permiso belongsTo Rol via IDRol
  IDRol_Rol!: Rol;
  getIDRol_Rol!: Sequelize.BelongsToGetAssociationMixin<Rol>;
  setIDRol_Rol!: Sequelize.BelongsToSetAssociationMixin<Rol, RolId>;
  createIDRol_Rol!: Sequelize.BelongsToCreateAssociationMixin<Rol>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Rol_Permiso {
    return Rol_Permiso.init({
    IDRol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Rol',
        key: 'ID'
      }
    },
    IDPermiso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Permiso',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Rol_Permiso',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Rol_Permiso",
        unique: true,
        fields: [
          { name: "IDRol" },
          { name: "IDPermiso" },
        ]
      },
    ]
  });
  }
}
