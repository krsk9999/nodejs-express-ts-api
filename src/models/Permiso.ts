import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Rol, RolId } from './Rol';
import type { Rol_Permiso, Rol_PermisoId } from './Rol_Permiso';

export interface PermisoAttributes {
  ID: number;
  Permiso?: string;
  Descripcion?: string;
}

export type PermisoPk = "ID";
export type PermisoId = Permiso[PermisoPk];
export type PermisoOptionalAttributes = "ID" | "Permiso" | "Descripcion";
export type PermisoCreationAttributes = Optional<PermisoAttributes, PermisoOptionalAttributes>;

export class Permiso extends Model<PermisoAttributes, PermisoCreationAttributes> implements PermisoAttributes {
  ID!: number;
  Permiso?: string;
  Descripcion?: string;

  // Permiso belongsToMany Rol via IDPermiso and IDRol
  IDRol_Rols!: Rol[];
  getIDRol_Rols!: Sequelize.BelongsToManyGetAssociationsMixin<Rol>;
  setIDRol_Rols!: Sequelize.BelongsToManySetAssociationsMixin<Rol, RolId>;
  addIDRol_Rol!: Sequelize.BelongsToManyAddAssociationMixin<Rol, RolId>;
  addIDRol_Rols!: Sequelize.BelongsToManyAddAssociationsMixin<Rol, RolId>;
  createIDRol_Rol!: Sequelize.BelongsToManyCreateAssociationMixin<Rol>;
  removeIDRol_Rol!: Sequelize.BelongsToManyRemoveAssociationMixin<Rol, RolId>;
  removeIDRol_Rols!: Sequelize.BelongsToManyRemoveAssociationsMixin<Rol, RolId>;
  hasIDRol_Rol!: Sequelize.BelongsToManyHasAssociationMixin<Rol, RolId>;
  hasIDRol_Rols!: Sequelize.BelongsToManyHasAssociationsMixin<Rol, RolId>;
  countIDRol_Rols!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Permiso hasMany Rol_Permiso via IDPermiso
  Rol_Permisos!: Rol_Permiso[];
  getRol_Permisos!: Sequelize.HasManyGetAssociationsMixin<Rol_Permiso>;
  setRol_Permisos!: Sequelize.HasManySetAssociationsMixin<Rol_Permiso, Rol_PermisoId>;
  addRol_Permiso!: Sequelize.HasManyAddAssociationMixin<Rol_Permiso, Rol_PermisoId>;
  addRol_Permisos!: Sequelize.HasManyAddAssociationsMixin<Rol_Permiso, Rol_PermisoId>;
  createRol_Permiso!: Sequelize.HasManyCreateAssociationMixin<Rol_Permiso>;
  removeRol_Permiso!: Sequelize.HasManyRemoveAssociationMixin<Rol_Permiso, Rol_PermisoId>;
  removeRol_Permisos!: Sequelize.HasManyRemoveAssociationsMixin<Rol_Permiso, Rol_PermisoId>;
  hasRol_Permiso!: Sequelize.HasManyHasAssociationMixin<Rol_Permiso, Rol_PermisoId>;
  hasRol_Permisos!: Sequelize.HasManyHasAssociationsMixin<Rol_Permiso, Rol_PermisoId>;
  countRol_Permisos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Permiso {
    return Permiso.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Permiso: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Descripcion: {
      type: DataTypes.STRING(254),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Permiso',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Permiso",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
  }
}
