import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Expediente, ExpedienteId } from './Expediente';
import type { USUARIO, USUARIOId } from './USUARIO';

export interface PacienteAttributes {
  Identificacion: string;
  Nombre: string;
  Genero?: string;
  FechaNacimiento?: any;
  Domicilio?: string;
  Provincia?: string;
  Telefono?: string;
  Celular?: string;
  APP?: string;
  ANPP?: string;
  AQT?: string;
  AlergiaMedicamento?: string;
  RiesgoEmbarazo?: boolean;
  Vacunas?: string;
  AntecedentesPerinatales?: string;
  FechaRegistro: any;
  CorreoInicioEnviado?: boolean;
  Estado: boolean;
  Correo?: string;
  UsuarioModificacion?: number;
  FechaModificacion: Date;
}

export type PacientePk = "Identificacion";
export type PacienteId = Paciente[PacientePk];
export type PacienteOptionalAttributes = "Genero" | "FechaNacimiento" | "Domicilio" | "Provincia" | "Telefono" | "Celular" | "APP" | "ANPP" | "AQT" | "AlergiaMedicamento" | "RiesgoEmbarazo" | "Vacunas" | "AntecedentesPerinatales" | "CorreoInicioEnviado" | "Estado" | "Correo" | "UsuarioModificacion" | "FechaModificacion";
export type PacienteCreationAttributes = Optional<PacienteAttributes, PacienteOptionalAttributes>;

export class Paciente extends Model<PacienteAttributes, PacienteCreationAttributes> implements PacienteAttributes {
  Identificacion!: string;
  Nombre!: string;
  Genero?: string;
  FechaNacimiento?: any;
  Domicilio?: string;
  Provincia?: string;
  Telefono?: string;
  Celular?: string;
  APP?: string;
  ANPP?: string;
  AQT?: string;
  AlergiaMedicamento?: string;
  RiesgoEmbarazo?: boolean;
  Vacunas?: string;
  AntecedentesPerinatales?: string;
  FechaRegistro!: any;
  CorreoInicioEnviado?: boolean;
  Estado!: boolean;
  Correo?: string;
  UsuarioModificacion?: number;
  FechaModificacion!: Date;

  // Paciente hasMany Expediente via Identificacion
  Expedientes!: Expediente[];
  getExpedientes!: Sequelize.HasManyGetAssociationsMixin<Expediente>;
  setExpedientes!: Sequelize.HasManySetAssociationsMixin<Expediente, ExpedienteId>;
  addExpediente!: Sequelize.HasManyAddAssociationMixin<Expediente, ExpedienteId>;
  addExpedientes!: Sequelize.HasManyAddAssociationsMixin<Expediente, ExpedienteId>;
  createExpediente!: Sequelize.HasManyCreateAssociationMixin<Expediente>;
  removeExpediente!: Sequelize.HasManyRemoveAssociationMixin<Expediente, ExpedienteId>;
  removeExpedientes!: Sequelize.HasManyRemoveAssociationsMixin<Expediente, ExpedienteId>;
  hasExpediente!: Sequelize.HasManyHasAssociationMixin<Expediente, ExpedienteId>;
  hasExpedientes!: Sequelize.HasManyHasAssociationsMixin<Expediente, ExpedienteId>;
  countExpedientes!: Sequelize.HasManyCountAssociationsMixin;
  // Paciente belongsTo USUARIO via UsuarioModificacion
  UsuarioModificacion_USUARIO!: USUARIO;
  getUsuarioModificacion_USUARIO!: Sequelize.BelongsToGetAssociationMixin<USUARIO>;
  setUsuarioModificacion_USUARIO!: Sequelize.BelongsToSetAssociationMixin<USUARIO, USUARIOId>;
  createUsuarioModificacion_USUARIO!: Sequelize.BelongsToCreateAssociationMixin<USUARIO>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Paciente {
    return Paciente.init({
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
      type: "SMALLDATETIME",
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
      type: "SMALLDATETIME",
      allowNull: false
    },
    CorreoInicioEnviado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    Estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    Correo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UsuarioModificacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'USUARIO',
        key: 'ID'
      }
    },
    FechaModificacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'Paciente',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_Paciente",
        unique: true,
        fields: [
          { name: "Identificacion" },
        ]
      },
    ]
  });
  }
}
