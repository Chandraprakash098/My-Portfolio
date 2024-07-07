const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const app=express()
const path=require('path')

dotenv.config()

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