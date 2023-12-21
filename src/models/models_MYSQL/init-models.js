var DataTypes = require("sequelize").DataTypes;
var _agendaelectronica = require("./agendaelectronica");
var _archivos_adjuntos = require("./archivos_adjuntos");
var _bitacora = require("./bitacora");
var _expediente = require("./expediente");
var _paciente = require("./paciente");
var _permiso = require("./permiso");
var _respaldos = require("./respaldos");
var _rol = require("./rol");
var _rol_permiso = require("./rol_permiso");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var agendaelectronica = _agendaelectronica(sequelize, DataTypes);
  var archivos_adjuntos = _archivos_adjuntos(sequelize, DataTypes);
  var bitacora = _bitacora(sequelize, DataTypes);
  var expediente = _expediente(sequelize, DataTypes);
  var paciente = _paciente(sequelize, DataTypes);
  var permiso = _permiso(sequelize, DataTypes);
  var respaldos = _respaldos(sequelize, DataTypes);
  var rol = _rol(sequelize, DataTypes);
  var rol_permiso = _rol_permiso(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  permiso.belongsToMany(rol, { as: 'IDRol_rols', through: rol_permiso, foreignKey: "IDPermiso", otherKey: "IDRol" });
  rol.belongsToMany(permiso, { as: 'IDPermiso_permisos', through: rol_permiso, foreignKey: "IDRol", otherKey: "IDPermiso" });
  archivos_adjuntos.belongsTo(expediente, { as: "FechaVisita_expediente", foreignKey: "FechaVisita"});
  expediente.hasMany(archivos_adjuntos, { as: "archivos_adjuntos", foreignKey: "FechaVisita"});
  archivos_adjuntos.belongsTo(expediente, { as: "Identificacion_expediente", foreignKey: "Identificacion"});
  expediente.hasMany(archivos_adjuntos, { as: "Identificacion_archivos_adjuntos", foreignKey: "Identificacion"});
  expediente.belongsTo(paciente, { as: "Identificacion_paciente", foreignKey: "Identificacion"});
  paciente.hasMany(expediente, { as: "expedientes", foreignKey: "Identificacion"});
  rol_permiso.belongsTo(permiso, { as: "IDPermiso_permiso", foreignKey: "IDPermiso"});
  permiso.hasMany(rol_permiso, { as: "rol_permisos", foreignKey: "IDPermiso"});
  rol_permiso.belongsTo(rol, { as: "IDRol_rol", foreignKey: "IDRol"});
  rol.hasMany(rol_permiso, { as: "rol_permisos", foreignKey: "IDRol"});
  usuario.belongsTo(rol, { as: "rol_rol", foreignKey: "rol"});
  rol.hasMany(usuario, { as: "usuarios", foreignKey: "rol"});
  agendaelectronica.belongsTo(usuario, { as: "usuario_usuario", foreignKey: "usuario"});
  usuario.hasMany(agendaelectronica, { as: "agendaelectronicas", foreignKey: "usuario"});
  bitacora.belongsTo(usuario, { as: "Usuario_usuario", foreignKey: "Usuario"});
  usuario.hasMany(bitacora, { as: "bitacoras", foreignKey: "Usuario"});
  paciente.belongsTo(usuario, { as: "UsuarioModificacion_usuario", foreignKey: "UsuarioModificacion"});
  usuario.hasMany(paciente, { as: "pacientes", foreignKey: "UsuarioModificacion"});
  usuario.belongsTo(usuario, { as: "UsuarioModificacion_usuario", foreignKey: "UsuarioModificacion"});
  usuario.hasMany(usuario, { as: "usuarios", foreignKey: "UsuarioModificacion"});

  return {
    agendaelectronica,
    archivos_adjuntos,
    bitacora,
    expediente,
    paciente,
    permiso,
    respaldos,
    rol,
    rol_permiso,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
