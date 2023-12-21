import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Permiso, PermisoId } from './Permiso';
import type { Rol_Permiso, Rol_PermisoId } from './Rol_Permiso';
import type { USUARIO, USUARIOId } from './USUARIO';

export interface RolAttributes {
  ID: number;
  Rol: string;
  Descripcion?: string;
  Estado?: boolean;
}

export type RolPk = "ID";
export type RolId = Rol[RolPk];
export type RolOptionalAttributes = "ID" | "Descripcion" | "Estado";
export type RolCreationAttributes = Optional<RolAttributes, RolOptionalAttributes>;

export class Rol extends Model<RolAttributes, RolCreationAttributes> implements RolAttributes {
  ID!: number;
  Rol!: string;
  Descripcion?: string;
  Estado?: boolean;

  // Rol belongsToMany Permiso via IDRol and IDPermiso
  IDPermiso_Permisos!: Permiso[];
  getIDPermiso_Permisos!: Sequelize.BelongsToManyGetAssociationsMixin<Permiso>;
  setIDPermiso_Permisos!: Sequelize.BelongsToManySetAssociationsMixin<Permiso, PermisoId>;
  addIDPermiso_Permiso!: Sequelize.BelongsToManyAddAssociationMixin<Permiso, PermisoId>;
  addIDPermiso_Permisos!: Sequelize.BelongsToManyAddAssociationsMixin<Permiso, PermisoId>;
  createIDPermiso_Permiso!: Sequelize.BelongsToManyCreateAssociationMixin<Permiso>;
  removeIDPermiso_Permiso!: Sequelize.BelongsToManyRemoveAssociationMixin<Permiso, PermisoId>;
  removeIDPermiso_Permisos!: Sequelize.BelongsToManyRemoveAssociationsMixin<Permiso, PermisoId>;
  hasIDPermiso_Permiso!: Sequelize.BelongsToManyHasAssociationMixin<Permiso, PermisoId>;
  hasIDPermiso_Permisos!: Sequelize.BelongsToManyHasAssociationsMixin<Permiso, PermisoId>;
  countIDPermiso_Permisos!: Sequelize.BelongsToManyCountAssociationsMixin;
  // Rol hasMany Rol_Permiso via IDRol
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
  // Rol hasMany USUARIO via rol
  USUARIOs!: USUARIO[];
  getUSUARIOs!: Sequelize.HasManyGetAssociationsMixin<USUARIO>;
  setUSUARIOs!: Sequelize.HasManySetAssociationsMixin<USUARIO, USUARIOId>;
  addUSUARIO!: Sequelize.HasManyAddAssociationMixin<USUARIO, USUARIOId>;
  addUSUARIOs!: Sequelize.HasManyAddAssociationsMixin<USUARIO, USUARIOId>;
  createUSUARIO!: Sequelize.HasManyCreateAssociationMixin<USUARIO>;
  removeUSUARIO!: Sequelize.HasManyRemoveAssociationMixin<USUARIO, USUARIOId>;
  removeUSUARIOs!: Sequelize.HasManyRemoveAssociationsMixin<USUARIO, USUARIOId>;
  hasUSUARIO!: Sequelize.HasManyHasAssociationMixin<USUARIO, USUARIOId>;
  hasUSUARIOs!: Sequelize.HasManyHasAssociationsMixin<USUARIO, USUARIOId>;
  countUSUARIOs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Rol {
    return Rol.init({
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Rol: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Descripcion: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    Estado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Rol',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Rol",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
  }
}
