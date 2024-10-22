var DataTypes = require("sequelize").DataTypes;
var _Estoque = require("./Estoque");
var _Insumo = require("./Insumo");
var _Transacao = require("./Transacao");
var _Usuario = require("./Usuario");

function initModels(sequelize) {
  var Estoque = _Estoque(sequelize, DataTypes);
  var Insumo = _Insumo(sequelize, DataTypes);
  var Transacao = _Transacao(sequelize, DataTypes);
  var Usuario = _Usuario(sequelize, DataTypes);

  Estoque.belongsTo(Insumo, { as: "Insumo", foreignKey: "InsumoID"});
  Insumo.hasMany(Estoque, { as: "Estoques", foreignKey: "InsumoID"});
  Transacao.belongsTo(Insumo, { as: "Insumo", foreignKey: "InsumoID"});
  Insumo.hasMany(Transacao, { as: "Transacaos", foreignKey: "InsumoID"});
  Transacao.belongsTo(Usuario, { as: "Usuario", foreignKey: "UsuarioID"});
  Usuario.hasMany(Transacao, { as: "Transacaos", foreignKey: "UsuarioID"});

  return {
    Estoque,
    Insumo,
    Transacao,
    Usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
