var express = require('express');
var router = express.Router();
var mysql = require('mysql2/promise');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  mysql
  const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root', // <== ระบุให้ถูกต้อง
      password: 'root', // <== ระบุให้ถูกต้อง
      database: 'bookstore', // <== ระบุ database ให้ถูกต้อง
      port: 8889, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
    })
    try {
      const users = await connection.query('SELECT firstname from Employee');
      const classsrooms = await connection.query('SELECT lastname from Employee');
      res.json({
        users: users[0],
        classsrooms: classsrooms[0],
      });
      await connection.end();
    } catch (error) {
      res.json({ error: err });
    }
   });
   
   
module.exports = router;
   
