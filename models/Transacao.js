const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Transacao', {
    TransacaoID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UsuarioID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Usuario',
        key: 'UsuarioID'
      }
    },
    InsumoID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Insumo',
        key: 'InsumoID'
      }
    },
    TipoTransacao: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    Quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DataTransacao: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'Transacao',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Transaca__558235107078FB40",
        unique: true,
        fields: [
          { name: "TransacaoID" },
        ]
      },
    ]
  });
};
