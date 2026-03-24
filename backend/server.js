const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect("mongodb+srv://loki2007:2007loki@cluster0.8lcncct.mongodb.net/?appName=Cluster0")
.then(() => console.log("MongoDB Connected ✅"))
.catch(err => console.log(err));

// ✅ Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

// ✅ Model
const Contact = mongoose.model("Contact", contactSchema);

// ✅ Route
app.post("/contact", async (req, res) => {
  try {
    console.log("Incoming Data:", req.body); // DEBUG

    const newContact = new Contact(req.body);
    await newContact.save();

    res.json({ message: "Saved successfully ✅" });

  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Error saving data ❌" });
  }
});

// Server
app.listen(5000, () => {
  console.log("Server running on 5000");
});