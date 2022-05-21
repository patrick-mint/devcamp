var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');



/* GET users listing. */
router.get('/', async (req, res, next) => {
  const connection = await mysql.createConnection({

      host: 'localhost',
      user: 'root', 
       password: 'root',
      database: 'bookstore', 
      port: 8889, 

   });

  try {

   const Books = await connection.query('SELECT * from Books');

    res.json({
      user: Books[0],
      
   });

   await connection.end();

   } catch (error) {
          res.json({ error: err });
      }
  });


module.exports = router;