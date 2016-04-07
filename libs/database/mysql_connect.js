var mysql = require('mysql');
var chalk = require('chalk');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'myLampp',
  database: 'simplecrud',
  multipleStatements: true
});

db.connect(function(err){
  if(err){
    console.log(chalk.red('Error connecting to database...'));
    return;
  }
  console.log(chalk.green('Connection established...'));
});


module.exports = db;
