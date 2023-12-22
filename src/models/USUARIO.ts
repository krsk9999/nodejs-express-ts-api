import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AgendaElectronica, AgendaElectronicaId } from './AgendaElectronica';
import type { Bitacora, BitacoraId } from './Bitacora';
import type { Paciente, PacienteId } from './Paciente';
import type { Rol, RolId } from './Rol';

export interface USUARIOAttributes {
  ID: number;
  USER: string;
  NAME: string;
  PASSWORD: string;
  STATUS: boolean;
  CREATEDDATE: Date;
  rol?: number;
  UsuarioModificacion?: number;
  FechaModificacion: Date;
}

export type USUARIOPk = "ID";
export type USUARIOId = USUARIO[USUARIOPk];
export type USUARIOOptionalAttributes = "ID" | "STATUS" | "CREATEDDATE" | "rol" | "UsuarioModificacion" | "FechaModificacion";
export type USUARIOCreationAttributes = Optional<USUARIOAttributes, USUARIOOptionalAttributes>;

export class USUARIO extends Model<USUARIOAttributes, USUARIOCreationAttributes> implements USUARIOAttributes {
  ID!: number;
  USER!: string;
  NAME!: string;
  PASSWORD!: string;
  STATUS!: boolean;
  CREATEDDATE!: Date;
  rol?: number;
  UsuarioModificacion?: number;
  FechaModificacion!: Date;

  // USUARIO belongsTo Rol via rol
  rol_Rol!: Rol;
  getRol_Rol!: Sequelize.BelongsToGetAssociationMixin<Rol>;
  setRol_Rol!: Sequelize.BelongsToSetAssociationMixin<Rol, RolId>;
  createRol_Rol!: Sequelize.BelongsToCreateAssociationMixin<Rol>;
  // USUARIO hasMany AgendaElectronica via usuario
  AgendaElectronicas!: AgendaElectronica[];
  getAgendaElectronicas!: Sequelize.HasManyGetAssociationsMixin<AgendaElectronica>;
  setAgendaElectronicas!: Sequelize.HasManySetAssociationsMixin<AgendaElectronica, AgendaElectronicaId>;
  addAgendaElectronica!: Sequelize.HasManyAddAssociationMixin<AgendaElectronica, AgendaElectronicaId>;
  addAgendaElectronicas!: Sequelize.HasManyAddAssociationsMixin<AgendaElectronica, AgendaElectronicaId>;
  createAgendaElectronica!: Sequelize.HasManyCreateAssociationMixin<AgendaElectronica>;
  removeAgendaElectronica!: Sequelize.HasManyRemoveAssociationMixin<AgendaElectronica, AgendaElectronicaId>;
  removeAgendaElectronicas!: Sequelize.HasManyRemoveAssociationsMixin<AgendaElectronica, AgendaElectronicaId>;
  hasAgendaElectronica!: Sequelize.HasManyHasAssociationMixin<AgendaElectronica, AgendaElectronicaId>;
  hasAgendaElectronicas!: Sequelize.HasManyHasAssociationsMixin<AgendaElectronica, AgendaElectronicaId>;
  countAgendaElectronicas!: Sequelize.HasManyCountAssociationsMixin;
  // USUARIO hasMany Bitacora via Usuario
  Bitacoras!: Bitacora[];
  getBitacoras!: Sequelize.HasManyGetAssociationsMixin<Bitacora>;
  setBitacoras!: Sequelize.HasManySetAssociationsMixin<Bitacora, BitacoraId>;
  addBitacora!: Sequelize.HasManyAddAssociationMixin<Bitacora, BitacoraId>;
  addBitacoras!: Sequelize.HasManyAddAssociationsMixin<Bitacora, BitacoraId>;
  createBitacora!: Sequelize.HasManyCreateAssociationMixin<Bitacora>;
  removeBitacora!: Sequelize.HasManyRemoveAssociationMixin<Bitacora, BitacoraId>;
  removeBitacoras!: Sequelize.HasManyRemoveAssociationsMixin<Bitacora, BitacoraId>;
  hasBitacora!: Sequelize.HasManyHasAssociationMixin<Bitacora, BitacoraId>;
  hasBitacoras!: Sequelize.HasManyHasAssociationsMixin<Bitacora, BitacoraId>;
  countBitacoras!: Sequelize.HasManyCountAssociationsMixin;
  // USUARIO hasMany Paciente via UsuarioModificacion
  Pacientes!: Paciente[];
  getPacientes!: Sequelize.HasManyGetAssociationsMixin<Paciente>;
  setPacientes!: Sequelize.HasManySetAssociationsMixin<Paciente, PacienteId>;
  addPaciente!: Sequelize.HasManyAddAssociationMixin<Paciente, PacienteId>;
  addPacientes!: Sequelize.HasManyAddAssociationsMixin<Paciente, PacienteId>;
  createPaciente!: Sequelize.HasManyCreateAssociationMixin<Paciente>;
  removePaciente!: Sequelize.HasManyRemoveAssociationMixin<Paciente, PacienteId>;
  removePacientes!: Sequelize.HasManyRemoveAssociationsMixin<Paciente, PacienteId>;
  hasPaciente!: Sequelize.HasManyHasAssociationMixin<Paciente, PacienteId>;
  hasPacientes!: Sequelize.HasManyHasAssociationsMixin<Paciente, PacienteId>;
  countPacientes!: Sequelize.HasManyCountAssociationsMixin;
  // USUARIO belongsTo USUARIO via UsuarioModificacion
  UsuarioModificacion_USUARIO!: USUARIO;
  getUsuarioModificacion_USUARIO!: Sequelize.BelongsToGetAssociationMixin<USUARIO>;
  setUsuarioModificacion_USUARIO!: Sequelize.BelongsToSetAssociationMixin<USUARIO, USUARIOId>;
  createUsuarioModificacion_USUARIO!: Sequelize.BelongsToCreateAssociationMixin<USUARIO>;

  static initModel(sequelize: Sequelize.Sequelize): typeof USUARIO {
    return USUARIO.init({
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
        type: DataTypes.STRING(4000),
        allowNull: false
      },
      STATUS: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      CREATEDDATE: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.fn('getdate')
      },
      rol: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'Rol',
          key: 'ID'
        }
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
      tableName: 'USUARIO',
      schema: 'dbo',
      hasTrigger: true,
      timestamps: false,
      indexes: [
        {
          name: "PK_ID",
          unique: true,
          fields: [
            { name: "ID" },
          ]
        },
      ]
    });
  }
}
