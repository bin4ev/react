const express =require('express');
const cookiesParser = require('cookie-parser')


function setUpExpres(app){
    app.use(cookiesParser())
}
module.exports= setUpExpres