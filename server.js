const express=require('express');
const morgan=require('morgan');
const app=express();
const dotenv=require('dotenv');
const bodyparser=require('body-parser');
const path=require("path");

dotenv.config({path: '.env'});
const PORT=process.env.PORT||8080

// log request
app.use(morgan("tiny"));

//parse requests
app.use(express.urlencoded({
    extended: true
}));

//set view engine
app.set("view engine", "ejs")


//  load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/css")))

app.get('/',(req, res)=>{
    res.render('index');
})


app.listen(PORT, ()=> {console.log(`server is running on http://localhost:${PORT}`)});