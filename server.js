const express=require('express');
const morgan=require('morgan');
const app=express();
const dotenv=require('dotenv');
const bodyparser=require('body-parser');
const path=require("path");
const jsdom = require('jsdom');
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const connectDB = require('./server/database/connection');
const axios = require('axios');
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));


const { document } = (new JSDOM('')).window;
global.document = document;


dotenv.config({path: '.env'});
const PORT=process.env.PORT||8080

// log request
app.use(morgan("tiny"));

connectDB();

//parse requests
app.use(express.urlencoded({
    extended: true
}));

//set view engine
app.set("view engine", "ejs");


//  load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//load routers
app.use('/', require('./server/routes/router'));


app.listen(PORT, ()=> {console.log(`server is running on http://localhost:${PORT}`)});