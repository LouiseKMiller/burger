// HOMEWORK WEEK 14 - burger
// UT BOOT CAMP
// LOUISE K MILLER
//
//=============================================
//  CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
//  WHICH CAN BE EITHER ON THE LOCAL COMPUTER OR DEPLOYED TO JAWSDB
//
//
var mysql = require('mysql');

var source = {

    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: '',
        database: "burgers_db"
    },

    jawsDB: {
        port: 3306,
        host: 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'g1dy3n7smet4fyks',
        password: "jz7sjorwhndcabs4",
        database: "xmkr1xnnl31pcgvk"
    }
}
var connection = mysql.createConnection(source.jawsDB);


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
