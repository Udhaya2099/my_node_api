const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbconfig");

const Log = sequelize.define("Log", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: true },
  activity: { type: DataTypes.STRING, allowNull: false },
});

const logActivity = async (userId, activity) => {
  await Log.create({ userId, activity });
};

module.exports = logActivity;
