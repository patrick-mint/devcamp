var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
// const Connection = require('mysql2/typings/mysql/lib/Connection');
const res = require('express/lib/response');
const { json } = require('express/lib/response');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async function (req, res) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root', // <== ระบุให้ถูกต้อง
    password: 'root', // <== ระบุให้ถูกต้อง
    database: 'user', // <== ระบุ database ให้ถูกต้อง
    port: 8889, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
 
  const { username, password, firstname, lastname, email } = req.body; // รับ post json object
  const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัส password ที่ส่งเข้ามา ก่อนลง db
 
  const result = await connection.execute(
    `INSERT INTO user (username,password, firstname, lastname, email) VALUES ('${username}','${hashedPassword}','${firstname}','${lastname}','${email}')`
  ); // insert ข้อมูล
 
  // ปิด connection
  await connection.end();  
  res.send({ id: result[0].insertId });

});

router.get('/mycart', async function (req, res) {
  
      res.json([
        { item: 'Product A selected' },
        { item: 'Product B selected' },
      ]);

 });
 



module.exports = router;
