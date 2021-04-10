const config ={
    PORT: process.env.PORT || 5000,
    DB_URI : 'mongodb://localhost/MyReactData' ,
    ROUND_SALT: 10,
    SECRET: 'badjanak',
    ADMIN_NAME: 'Admin'
}
module.exports = config