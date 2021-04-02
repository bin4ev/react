const express =require('express');
const cookiesParser = require('cookie-parser')
const cors =require('cors');
const auth = require('../middlewares/auth')


function setUpExpres(app){
    app.use(express.json())
    app.use(express.urlencoded({
        extended: true
    }))
    app.use(cookiesParser());
    app.use(cors());
    app.use(auth());
}
module.exports= setUpExpres