const Message = require("../models/message");
const logActivity = require("../models/log");

exports.sendMessage = async (req, res) => {
  try {
    const { senderId, receiverId, message } = req.body;
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;

    const newMessage = await Message.create({ senderId, receiverId, message, fileUrl });

    await logActivity(senderId, "Message sent");
    res.status(201).json({ message: "Message sent", data: newMessage });
  } catch (error) {
    res.status(500).json({ message: "Error sending message", error });
  }
};
