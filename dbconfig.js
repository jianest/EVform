var mysql  = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost', 
    user: 'root',
    password: '123456',
    database:'yfzs', 
    port: 3306
});

connection.connect();

module.exports = {
    connection
};