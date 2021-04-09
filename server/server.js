require('dotenv').config();
const express =require('express');
const app = express();
const router =require('./routes')
const{PORT} = require('./config/config')
const errorHandler=require('./middlewares/errorHandler')

require('./config/express')(app)
require('./config/mongoose')(app)

app.use(router)

app.use(errorHandler)
app.get('/',(req,res)=>{
res.send('Servers is working')
})
app.get('*',function (req,res,next) {
    let err= new Error('Page not found');
    err.statusCode=404;
    next(err)
})
app.listen(PORT,console.log(`Server listening on port....${PORT}`))