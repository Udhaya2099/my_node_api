const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");
const upload = require("../config/multerConfig");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/sendMessage", authMiddleware, upload.single("file"), messageController.sendMessage);

module.exports = router;
