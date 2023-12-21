import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Archivos_Adjuntos, Archivos_AdjuntosId } from './Archivos_Adjuntos';
import type { Paciente, PacienteId } from './Paciente';

export interface ExpedienteAttributes {
  FechaVisita: any;
  Identificacion: string;
  PadecimientoActual?: string;
  PA?: string;
  Pulso?: number;
  Sat?: number;
  Temperatura?: number;
  Glicemia?: number;
  Peso?: number;
  Talla?: number;
  IMC?: number;
  FUR?: any;
  FUPAP?: any;
  FUMMG?: any;
  OtrosExamen?: string;
  Diagnostico?: string;
  Medicamento?: string;
  Laboratorio?: string;
  Referencia?: string;
  Gabinete?: string;
  Seguimiento: boolean;
  CorreoSeguimiento: boolean;
  LlamadaSeguimiento: boolean;
}

export type ExpedientePk = "FechaVisita" | "Identificacion";
export type ExpedienteId = Expediente[ExpedientePk];
export type ExpedienteOptionalAttributes = "PadecimientoActual" | "PA" | "Pulso" | "Sat" | "Temperatura" | "Glicemia" | "Peso" | "Talla" | "IMC" | "FUR" | "FUPAP" | "FUMMG" | "OtrosExamen" | "Diagnostico" | "Medicamento" | "Laboratorio" | "Referencia" | "Gabinete" | "Seguimiento" | "CorreoSeguimiento" | "LlamadaSeguimiento";
export type ExpedienteCreationAttributes = Optional<ExpedienteAttributes, ExpedienteOptionalAttributes>;

export class Expediente extends Model<ExpedienteAttributes, ExpedienteCreationAttributes> implements ExpedienteAttributes {
  FechaVisita!: any;
  Identificacion!: string;
  PadecimientoActual?: string;
  PA?: string;
  Pulso?: number;
  Sat?: number;
  Temperatura?: number;
  Glicemia?: number;
  Peso?: number;
  Talla?: number;
  IMC?: number;
  FUR?: any;
  FUPAP?: any;
  FUMMG?: any;
  OtrosExamen?: string;
  Diagnostico?: string;
  Medicamento?: string;
  Laboratorio?: string;
  Referencia?: string;
  Gabinete?: string;
  Seguimiento!: boolean;
  CorreoSeguimiento!: boolean;
  LlamadaSeguimiento!: boolean;

  // Expediente hasMany Archivos_Adjuntos via FechaVisita
  Archivos_Adjuntos!: Archivos_Adjuntos[];
  getArchivos_Adjuntos!: Sequelize.HasManyGetAssociationsMixin<Archivos_Adjuntos>;
  setArchivos_Adjuntos!: Sequelize.HasManySetAssociationsMixin<Archivos_Adjuntos, Archivos_AdjuntosId>;
  addArchivos_Adjunto!: Sequelize.HasManyAddAssociationMixin<Archivos_Adjuntos, Archivos_AdjuntosId>;
  addArchivos_Adjuntos!: Sequelize.HasManyAddAssociationsMixin<Archivos_Adjuntos, Archivos_AdjuntosId>;
  createArchivos_Adjunto!: Sequelize.HasManyCreateAssociationMixin<Archivos_Adjuntos>;
  removeArchivos_Adjunto!: Sequelize.HasManyRemoveAssociationMixin<Archivos_Adjuntos, Archivos_AdjuntosId>;
  removeArchivos_Adjuntos!: Sequelize.HasManyRemoveAssociationsMixin<Archivos_Adjuntos, Archivos_AdjuntosId>;
  hasArchivos_Adjunto!: Sequelize.HasManyHasAssociationMixin<Archivos_Adjuntos, Archivos_AdjuntosId>;
  hasArchivos_Adjuntos!: Sequelize.HasManyHasAssociationsMixin<Archivos_Adjuntos, Archivos_AdjuntosId>;
  countArchivos_Adjuntos!: Sequelize.HasManyCountAssociationsMixin;
  // Expediente hasMany Archivos_Adjuntos via Identificacion
  Identificacion_Archivos_Adjuntos!: Archivos_Adjuntos[];
  getIdentificacion_Archivos_Adjuntos!: Sequelize.HasManyGetAssociationsMixin<Archivos_Adjuntos>;
  setIdentificacion_Archivos_Adjuntos!: Sequelize.HasManySetAssociationsMixin<Archivos_Adjuntos, Archivos_AdjuntosId>;
  addIdentificacion_Archivos_Adjunto!: Sequelize.HasManyAddAssociationMixin<Archivos_Adjuntos, Archivos_AdjuntosId>;
  addIdentificacion_Archivos_Adjuntos!: Sequelize.HasManyAddAssociationsMixin<Archivos_Adjuntos, Archivos_AdjuntosId>;
  createIdentificacion_Archivos_Adjunto!: Sequelize.HasManyCreateAssociationMixin<Archivos_Adjuntos>;
  removeIdentificacion_Archivos_Adjunto!: Sequelize.HasManyRemoveAssociationMixin<Archivos_Adjuntos, Archivos_AdjuntosId>;
  removeIdentificacion_Archivos_Adjuntos!: Sequelize.HasManyRemoveAssociationsMixin<Archivos_Adjuntos, Archivos_AdjuntosId>;
  hasIdentificacion_Archivos_Adjunto!: Sequelize.HasManyHasAssociationMixin<Archivos_Adjuntos, Archivos_AdjuntosId>;
  hasIdentificacion_Archivos_Adjuntos!: Sequelize.HasManyHasAssociationsMixin<Archivos_Adjuntos, Archivos_AdjuntosId>;
  countIdentificacion_Archivos_Adjuntos!: Sequelize.HasManyCountAssociationsMixin;
  // Expediente belongsTo Paciente via Identificacion
  Identificacion_Paciente!: Paciente;
  getIdentificacion_Paciente!: Sequelize.BelongsToGetAssociationMixin<Paciente>;
  setIdentificacion_Paciente!: Sequelize.BelongsToSetAssociationMixin<Paciente, PacienteId>;
  createIdentificacion_Paciente!: Sequelize.BelongsToCreateAssociationMixin<Paciente>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Expediente {
    return Expediente.init({
    FechaVisita: {
      type: "SMALLDATETIME",
      allowNull: false,
      primaryKey: true
    },
    Identificacion: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Paciente',
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
      type: "SMALLDATETIME",
      allowNull: true
    },
    FUPAP: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    FUMMG: {
      type: "SMALLDATETIME",
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
      defaultValue: false
    },
    CorreoSeguimiento: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    LlamadaSeguimiento: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Expediente',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Expediente",
        unique: true,
        fields: [
          { name: "FechaVisita" },
          { name: "Identificacion" },
        ]
      },
    ]
  });
  }
}
