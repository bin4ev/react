const mongoose = require('mongoose');
const{DB_URI}= require('./config');

module.exports = () => {
    mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex : true,
      useFindAndModify:false,
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log('We are connected !');
    });
  
  }