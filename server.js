const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const app=express()
const path=require('path')
const fs = require("fs");

dotenv.config()

const projectRoot = path.resolve(__dirname);
const frontendBuildPath = path.join(projectRoot, "frontend", "build");

console.log("Project root:", projectRoot);
console.log("Frontend build path:", frontendBuildPath);
console.log(
  "Frontend build directory exists?",
  fs.existsSync(frontendBuildPath)
);
console.log("Contents of project root:", fs.readdirSync(projectRoot));

if (fs.existsSync(frontendBuildPath)) {
  console.log(
    "Contents of frontend build directory:",
    fs.readdirSync(frontendBuildPath)
  );
}

// Use the resolved path in your Express setup
app.use(express.static(frontendBuildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(frontendBuildPath, "index.html"));
});

//middlewares
app.use(cors())
app.use(express.json())

//static files
app.use(express.static(path.join(__dirname, "./frontend/build")));

//Routes
app.use('/api/v1/portfolio', require('./routes/PortfolioRoute'))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});

//port
const port =process.env.PORT || 8080

//listen
app.listen(port,()=>{
    console.log(`server is listening on PORT ${port}` )
})