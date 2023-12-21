import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { USUARIO, USUARIOId } from './USUARIO';

export interface AgendaElectronicaAttributes {
  id: number;
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  horaInicio: string;
  fechaFinal: string;
  horaFinal: string;
  paciente?: string;
  usuario: number;
}

export type AgendaElectronicaPk = "id";
export type AgendaElectronicaId = AgendaElectronica[AgendaElectronicaPk];
export type AgendaElectronicaOptionalAttributes = "id" | "paciente";
export type AgendaElectronicaCreationAttributes = Optional<AgendaElectronicaAttributes, AgendaElectronicaOptionalAttributes>;

export class AgendaElectronica extends Model<AgendaElectronicaAttributes, AgendaElectronicaCreationAttributes> implements AgendaElectronicaAttributes {
  id!: number;
  titulo!: string;
  descripcion!: string;
  fechaInicio!: string;
  horaInicio!: string;
  fechaFinal!: string;
  horaFinal!: string;
  paciente?: string;
  usuario!: number;

  // AgendaElectronica belongsTo USUARIO via usuario
  usuario_USUARIO!: USUARIO;
  getUsuario_USUARIO!: Sequelize.BelongsToGetAssociationMixin<USUARIO>;
  setUsuario_USUARIO!: Sequelize.BelongsToSetAssociationMixin<USUARIO, USUARIOId>;
  createUsuario_USUARIO!: Sequelize.BelongsToCreateAssociationMixin<USUARIO>;

  static initModel(sequelize: Sequelize.Sequelize): typeof AgendaElectronica {
    return AgendaElectronica.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    fechaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    horaInicio: {
      type: DataTypes.TIME,
      allowNull: false
    },
    fechaFinal: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    horaFinal: {
      type: DataTypes.TIME,
      allowNull: false
    },
    paciente: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'USUARIO',
        key: 'ID'
      }
    }
  }, {
    sequelize,
    tableName: 'AgendaElectronica',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_agendaelectronica_id",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
