const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();

app.use(
  cors({
    origin: ["https://my-portfolio-website-steel-eight.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/v1/portfolio", require("./routes/PortfolioRoute"));

// Export the Express API
module.exports = app;
