const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Route
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New Contact:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.json({ message: "Message received successfully!" });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});