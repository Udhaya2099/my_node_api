const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbconfig");

const Message = sequelize.define("Message", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  senderId: { type: DataTypes.INTEGER, allowNull: false },
  receiverId: { type: DataTypes.INTEGER, allowNull: false },
  message: { type: DataTypes.TEXT, allowNull: true },
  fileUrl: { type: DataTypes.STRING, allowNull: true }, // File upload support
});

module.exports = Message;
