// const mysql = require("mysql2");
// const sqldb = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "mysql",
//     database: "users"
// })

// module.exports = sqldb;

require("dotenv").config();
const {DataSource} = require("typeorm");
const sqlconnection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: "newdb",
    synchronize: true, // make it false when in production
    logging: false,
    entities:[]
})

module.exports = {
    sqlconnection
}