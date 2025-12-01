const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db-connection');

const Bus = sequelize.define('bus', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  busNumber: { type: DataTypes.STRING, allowNull: false },
  totalSeats: { type: DataTypes.INTEGER, allowNull: false },
  availableSeats: { type: DataTypes.INTEGER, allowNull: false }
}, { freezeTableName: true });

module.exports = Bus;
