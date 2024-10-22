const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Estoque', {
    EstoqueID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    InsumoID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Insumo',
        key: 'InsumoID'
      }
    },
    QuantidadeAtual: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Estoque',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Estoque__8B021A69B9245394",
        unique: true,
        fields: [
          { name: "EstoqueID" },
        ]
      },
    ]
  });
};
