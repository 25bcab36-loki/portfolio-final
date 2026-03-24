const express = require("express");

const app = express();

// ✅ IMPORTANT middleware (THIS WAS MISSING)
app.use(express.json());

// Routes
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New Contact:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.json({ message: "Message received successfully!" });
});

module.exports = app;