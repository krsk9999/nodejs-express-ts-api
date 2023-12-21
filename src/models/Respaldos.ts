import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RespaldosAttributes {
  id: number;
  ruta: string;
  estado: boolean;
  usuario: string;
  fecha: any;
  fechaEliminacion?: any;
}

export type RespaldosPk = "id";
export type RespaldosId = Respaldos[RespaldosPk];
export type RespaldosOptionalAttributes = "id" | "estado" | "fecha" | "fechaEliminacion";
export type RespaldosCreationAttributes = Optional<RespaldosAttributes, RespaldosOptionalAttributes>;

export class Respaldos extends Model<RespaldosAttributes, RespaldosCreationAttributes> implements RespaldosAttributes {
  id!: number;
  ruta!: string;
  estado!: boolean;
  usuario!: string;
  fecha!: any;
  fechaEliminacion?: any;


  static initModel(sequelize: Sequelize.Sequelize): typeof Respaldos {
    return Respaldos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ruta: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    usuario: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fecha: {
      type: "SMALLDATETIME",
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    },
    fechaEliminacion: {
      type: "SMALLDATETIME",
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Respaldos',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Respaldo__3213E83F1209AD79",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
