var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    port : 3308,
    database : 'oper'
    
  });

  connection.connect(function(error){

    if(!!error){

        console.log('Error');

    }else{

        console.log('Connected')

    }

  });

  app.get('/', function(req, resp){

    connection.query("SELECT * FROM `inquiry`",function(error, rows, fields){

    if(!!error){

        console.log('Error in the query');

    }

    else{

        console.log('Succesful!\n');
        console.log(rows[1].ShippingLine);
        resp.send('Hello, ' + rows[0].ShippingLine);

      }

      });   

  })

  app.listen(8000);