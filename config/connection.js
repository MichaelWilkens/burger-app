var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'snibor21',
    database: 'burgers_db'
})

connection.connect(function(err){
    if(err) {
        return console.log(err)
    }
    console.log('connected as id ' + connection.threadID);
})

module.exports = connection;