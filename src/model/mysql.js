const mysql = require("mysql2");

console.log(process.env);

const con = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASS,
    database: process.env.MYSQLDATABASE,
    port: process.env.MYSQLPORT
});

module.exports = con;