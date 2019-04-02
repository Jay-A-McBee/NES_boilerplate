'use strict';
module.exports = (sequelize, DataTypes) => {
  const Credentials = sequelize.define('Credentials', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Credentials.associate = function(models) {
    Credentials.belongsTo(models.User)
  };
  return Credentials;
};