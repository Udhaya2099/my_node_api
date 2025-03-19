require("dotenv").config();
const express = require("express");
const sequelize = require("./config/dbconfig");
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

sequelize.sync().then(() => console.log("Database synced"));

app.listen(5000, () => console.log("Server running on port 5000"));
