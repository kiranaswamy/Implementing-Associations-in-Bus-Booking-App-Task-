const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const User = sequelize.define(
  'user',
  {
     id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey:true,
      autoIncrement:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
    },
  },
  
);

module.exports= User