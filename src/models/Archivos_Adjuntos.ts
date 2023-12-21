import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Expediente, ExpedienteId } from './Expediente';

export interface Archivos_AdjuntosAttributes {
  Id: number;
  Nombre: string;
  Ruta: string;
  Fecha: Date;
  FechaVisita: any;
  Identificacion: string;
}

export type Archivos_AdjuntosPk = "Id";
export type Archivos_AdjuntosId = Archivos_Adjuntos[Archivos_AdjuntosPk];
export type Archivos_AdjuntosOptionalAttributes = "Id" | "Fecha";
export type Archivos_AdjuntosCreationAttributes = Optional<Archivos_AdjuntosAttributes, Archivos_AdjuntosOptionalAttributes>;

export class Archivos_Adjuntos extends Model<Archivos_AdjuntosAttributes, Archivos_AdjuntosCreationAttributes> implements Archivos_AdjuntosAttributes {
  Id!: number;
  Nombre!: string;
  Ruta!: string;
  Fecha!: Date;
  FechaVisita!: any;
  Identificacion!: string;

  // Archivos_Adjuntos belongsTo Expediente via FechaVisita
  FechaVisita_Expediente!: Expediente;
  getFechaVisita_Expediente!: Sequelize.BelongsToGetAssociationMixin<Expediente>;
  setFechaVisita_Expediente!: Sequelize.BelongsToSetAssociationMixin<Expediente, ExpedienteId>;
  createFechaVisita_Expediente!: Sequelize.BelongsToCreateAssociationMixin<Expediente>;
  // Archivos_Adjuntos belongsTo Expediente via Identificacion
  Identificacion_Expediente!: Expediente;
  getIdentificacion_Expediente!: Sequelize.BelongsToGetAssociationMixin<Expediente>;
  setIdentificacion_Expediente!: Sequelize.BelongsToSetAssociationMixin<Expediente, ExpedienteId>;
  createIdentificacion_Expediente!: Sequelize.BelongsToCreateAssociationMixin<Expediente>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Archivos_Adjuntos {
    return Archivos_Adjuntos.init({
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
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    FechaVisita: {
      type: "SMALLDATETIME",
      allowNull: false,
      references: {
        model: 'Expediente',
        key: 'Identificacion'
      }
    },
    Identificacion: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'Expediente',
        key: 'Identificacion'
      }
    }
  }, {
    sequelize,
    tableName: 'Archivos_Adjuntos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_id_archivos_adjuntos",
        unique: true,
        fields: [
          { name: "Id" },
        ]
      },
    ]
  });
  }
}
