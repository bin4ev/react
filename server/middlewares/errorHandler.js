const errorHandler = (err, req, res, next) => {
if(err.code=='11000'){
    err.messages='Duplicate keys'
}
    err.messages = err.messages || err;
    err.status = err.status || 500;
    console.log(err.messages);

    res.status(err.status).send( { error: err })

}
module.exports = errorHandler