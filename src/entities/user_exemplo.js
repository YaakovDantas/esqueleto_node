'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    social_name: DataTypes.STRING,
    category: {
      type: DataTypes.ENUM,
      values: [ 'VIDRACEIRO', 'VENDEDOR', 'FINACEIRO', 'CAIXA']
    },
    activity: {
      type: DataTypes.ENUM,
      values: [ 'VIDRACEIRO', 'SERRALHEIRO', 'AUTONOMO', 'MACENEIRO', 'FABRICA', 'CONSTRUTORA', 'VENDEDOR', 'FINACEIRO', 'CAIXA']
    },
    code: DataTypes.STRING,
    disable: DataTypes.BOOLEAN,
    cpf_cnpj: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    token_created_at: DataTypes.DATE
  }, {
    freezeTableName: true,
    tableName: 'user'
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};