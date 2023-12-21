import { Sequelize, Dialect } from "sequelize";
import { AgendaElectronica as _AgendaElectronica } from "./AgendaElectronica";
import type { AgendaElectronicaAttributes, AgendaElectronicaCreationAttributes } from "./AgendaElectronica";
import { Archivos_Adjuntos as _Archivos_Adjuntos } from "./Archivos_Adjuntos";
import type { Archivos_AdjuntosAttributes, Archivos_AdjuntosCreationAttributes } from "./Archivos_Adjuntos";
import { Bitacora as _Bitacora } from "./Bitacora";
import type { BitacoraAttributes, BitacoraCreationAttributes } from "./Bitacora";
import { Expediente as _Expediente } from "./Expediente";
import type { ExpedienteAttributes, ExpedienteCreationAttributes } from "./Expediente";
import { Paciente as _Paciente } from "./Paciente";
import type { PacienteAttributes, PacienteCreationAttributes } from "./Paciente";
import { Permiso as _Permiso } from "./Permiso";
import type { PermisoAttributes, PermisoCreationAttributes } from "./Permiso";
import { Respaldos as _Respaldos } from "./Respaldos";
import type { RespaldosAttributes, RespaldosCreationAttributes } from "./Respaldos";
import { Rol as _Rol } from "./Rol";
import type { RolAttributes, RolCreationAttributes } from "./Rol";
import { Rol_Permiso as _Rol_Permiso } from "./Rol_Permiso";
import type { Rol_PermisoAttributes, Rol_PermisoCreationAttributes } from "./Rol_Permiso";
import { USUARIO as _USUARIO } from "./USUARIO";
import type { USUARIOAttributes, USUARIOCreationAttributes } from "./USUARIO";

const sequelize = new Sequelize(process.env.DB_DATABASE as string, process.env.DB_USERNAME as string, process.env.DB_PASSWORD as string, {
  host: process.env.DB_SERVER as string,
  dialect: process.env.DB_DIALECT as Dialect
});

export {
  _AgendaElectronica as AgendaElectronica,
  _Archivos_Adjuntos as Archivos_Adjuntos,
  _Bitacora as Bitacora,
  _Expediente as Expediente,
  _Paciente as Paciente,
  _Permiso as Permiso,
  _Respaldos as Respaldos,
  _Rol as Rol,
  _Rol_Permiso as Rol_Permiso,
  _USUARIO as USUARIO,
};

export type {
  AgendaElectronicaAttributes,
  AgendaElectronicaCreationAttributes,
  Archivos_AdjuntosAttributes,
  Archivos_AdjuntosCreationAttributes,
  BitacoraAttributes,
  BitacoraCreationAttributes,
  ExpedienteAttributes,
  ExpedienteCreationAttributes,
  PacienteAttributes,
  PacienteCreationAttributes,
  PermisoAttributes,
  PermisoCreationAttributes,
  RespaldosAttributes,
  RespaldosCreationAttributes,
  RolAttributes,
  RolCreationAttributes,
  Rol_PermisoAttributes,
  Rol_PermisoCreationAttributes,
  USUARIOAttributes,
  USUARIOCreationAttributes,
};

function initModels(sequelize: Sequelize) {
  const AgendaElectronica = _AgendaElectronica.initModel(sequelize);
  const Archivos_Adjuntos = _Archivos_Adjuntos.initModel(sequelize);
  const Bitacora = _Bitacora.initModel(sequelize);
  const Expediente = _Expediente.initModel(sequelize);
  const Paciente = _Paciente.initModel(sequelize);
  const Permiso = _Permiso.initModel(sequelize);
  const Respaldos = _Respaldos.initModel(sequelize);
  const Rol = _Rol.initModel(sequelize);
  const Rol_Permiso = _Rol_Permiso.initModel(sequelize);
  const USUARIO = _USUARIO.initModel(sequelize);

  Permiso.belongsToMany(Rol, { as: 'IDRol_Rols', through: Rol_Permiso, foreignKey: "IDPermiso", otherKey: "IDRol" });
  Rol.belongsToMany(Permiso, { as: 'IDPermiso_Permisos', through: Rol_Permiso, foreignKey: "IDRol", otherKey: "IDPermiso" });
  Archivos_Adjuntos.belongsTo(Expediente, { as: "FechaVisita_Expediente", foreignKey: "FechaVisita" });
  Expediente.hasMany(Archivos_Adjuntos, { as: "Archivos_Adjuntos", foreignKey: "FechaVisita" });
  Archivos_Adjuntos.belongsTo(Expediente, { as: "Identificacion_Expediente", foreignKey: "Identificacion" });
  Expediente.hasMany(Archivos_Adjuntos, { as: "Identificacion_Archivos_Adjuntos", foreignKey: "Identificacion" });
  Expediente.belongsTo(Paciente, { as: "Identificacion_Paciente", foreignKey: "Identificacion" });
  Paciente.hasMany(Expediente, { as: "Expedientes", foreignKey: "Identificacion" });
  Rol_Permiso.belongsTo(Permiso, { as: "IDPermiso_Permiso", foreignKey: "IDPermiso" });
  Permiso.hasMany(Rol_Permiso, { as: "Rol_Permisos", foreignKey: "IDPermiso" });
  Rol_Permiso.belongsTo(Rol, { as: "IDRol_Rol", foreignKey: "IDRol" });
  Rol.hasMany(Rol_Permiso, { as: "Rol_Permisos", foreignKey: "IDRol" });
  USUARIO.belongsTo(Rol, { as: "rol_Rol", foreignKey: "rol" });
  Rol.hasMany(USUARIO, { as: "USUARIOs", foreignKey: "rol" });
  AgendaElectronica.belongsTo(USUARIO, { as: "usuario_USUARIO", foreignKey: "usuario" });
  USUARIO.hasMany(AgendaElectronica, { as: "AgendaElectronicas", foreignKey: "usuario" });
  Bitacora.belongsTo(USUARIO, { as: "Usuario_USUARIO", foreignKey: "Usuario" });
  USUARIO.hasMany(Bitacora, { as: "Bitacoras", foreignKey: "Usuario" });
  Paciente.belongsTo(USUARIO, { as: "UsuarioModificacion_USUARIO", foreignKey: "UsuarioModificacion" });
  USUARIO.hasMany(Paciente, { as: "Pacientes", foreignKey: "UsuarioModificacion" });
  USUARIO.belongsTo(USUARIO, { as: "UsuarioModificacion_USUARIO", foreignKey: "UsuarioModificacion" });
  USUARIO.hasMany(USUARIO, { as: "USUARIOs", foreignKey: "UsuarioModificacion" });

  return {
    AgendaElectronica: AgendaElectronica,
    Archivos_Adjuntos: Archivos_Adjuntos,
    Bitacora: Bitacora,
    Expediente: Expediente,
    Paciente: Paciente,
    Permiso: Permiso,
    Respaldos: Respaldos,
    Rol: Rol,
    Rol_Permiso: Rol_Permiso,
    Usuario: USUARIO,
  };
}



export default initModels(sequelize);
