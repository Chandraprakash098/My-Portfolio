const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();
// Middlewares
app.use(cors());
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "./frontend/build")));

// Routes
app.use("/api/v1/portfolio", require("./routes/PortfolioRoute"));

// Serve index.html for any other routes (React Router routes)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});

// Port
const port = process.env.PORT || 8080;

// Start server
app.listen(port, () => {
  console.log(`Server is listening on PORT ${port}`);
});
