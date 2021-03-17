const express =require('express');
const cookiesParser = require('cookie-parser')
const cors =require('cors');



function setUpExpres(app){
    app.use(express.json())
    app.use(express.urlencoded({
        extended: true
    }))
    app.use(cookiesParser());
    app.use(cors());
}
module.exports= setUpExpres