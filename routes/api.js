var express = require('express');
var router = express.Router();
var path = require('path');
var chalk = require('chalk');
var db = require(path.resolve('libs/database/mysql_connect.js'));


/* Api root */
router.get('/', function(req, res, next){
  res.render('api/index', {title:'Welcome to the API!'});
});

/* GET random msg. */
router.get('/msg', function(req, res, next){
  res.send({name:"John Doe"});
});

router.get('/data', function(req, res, next){
  db.query(
    'SELECT * FROM wp_users;',
    function(err, rows){
      if(err) throw err;
      console.log(chalk.blue('Data received from Db:\n'));
      console.log(chalk.green(rows));
      res.send(rows);
    }
  );
});



module.exports = router;
