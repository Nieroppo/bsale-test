'use stric'

const config = require('./config')
const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:config.DATABASE_HOST,
    user: config.DATABASE_USER,
    password: config.DATABASE_PASSWORD,
    database: config.DATABASE,
});



module.exports = mysqlConnection;