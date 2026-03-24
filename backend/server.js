const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://loki1:loki2007@cluster0.t1dlrzr.mongodb.net/")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Contact = mongoose.model("Contact", ContactSchema);

// Route
app.post("/contact", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.json({ message: "Message saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});