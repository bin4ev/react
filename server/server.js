const express =require('express');
const app = express();
const router =require('./routes')
const{PORT} = require('./config/config')


require('./config/express')(app)
require('./config/mongoose')(app)


app.use(router)
app.get('/',(req,res)=>{
res.send('Servers is working')
})

app.listen(PORT,console.log(`Server listening on port....${PORT}`))