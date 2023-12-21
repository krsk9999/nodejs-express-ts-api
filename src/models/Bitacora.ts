import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { USUARIO, USUARIOId } from './USUARIO';

export interface BitacoraAttributes {
  ID: number;
  Usuario: number;
  Fecha?: Date;
  Accion?: string;
  Detalle?: string;
}

export type BitacoraPk = "ID";
export type BitacoraId = Bitacora[BitacoraPk];
export type BitacoraOptionalAttributes = "ID" | "Fecha" | "Accion" | "Detalle";
export type BitacoraCreationAttributes = Optional<BitacoraAttributes, BitacoraOptionalAttributes>;

export class Bitacora extends Model<BitacoraAttributes, BitacoraCreationAttributes> implements BitacoraAttributes {
  ID!: number;
  Usuario!: number;
  Fecha?: Date;
  Accion?: string;
  Detalle?: string;

  // Bitacora belongsTo USUARIO via Usuario
  Usuario_USUARIO!: USUARIO;
  getUsuario_USUARIO!: Sequelize.BelongsToGetAssociationMixin<USUARIO>;
  setUsuario_USUARIO!: Sequelize.BelongsToSetAssociationMixin<USUARIO, USUARIOId>;
  createUsuario_USUARIO!: Sequelize.BelongsToCreateAssociationMixin<USUARIO>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Bitacora {
    return Bitacora.init({
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
        model: 'USUARIO',
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
    tableName: 'Bitacora',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Bitacora",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
  }
}
