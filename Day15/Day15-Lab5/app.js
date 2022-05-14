
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.get('/api/users', (req, res) => {
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // <== ระบุให้ถูกต้อง
  password: 'root',  // <== ระบุให้ถูกต้อง
  database: 'devcamp',
  port : 8889  // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
});

// เปิด connection ไปที่ database
connection.connect();

connection.query('SELECT * from user', (err, rows, fields) => {
  if (err) throw err;

  // return response กลับไปหา client โดยแปลง record เป็น json array
  res.json(rows);
});

// ปิด connection
connection.end();
});

app.listen(3000, () => {
console.log('server started on port 3000!');
});



