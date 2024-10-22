const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Usuario', {
    UsuarioID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Nome: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "UQ__Usuario__A9D10534BE97A412"
    },
    Senha: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DataCriacao: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'Usuario',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Usuario__2B3DE7989473102B",
        unique: true,
        fields: [
          { name: "UsuarioID" },
        ]
      },
      {
        name: "UQ__Usuario__A9D10534BE97A412",
        unique: true,
        fields: [
          { name: "Email" },
        ]
      },
    ]
  });
};
