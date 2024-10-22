const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Insumo', {
    InsumoID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NomeInsumo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    UnidadeMedida: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Preco: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Insumo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Insumo__C10BE936F45F6E8F",
        unique: true,
        fields: [
          { name: "InsumoID" },
        ]
      },
    ]
  });
};
