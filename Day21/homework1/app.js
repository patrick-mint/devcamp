const express = require('express');
const mysql = require('mysql2/promise')
const app = express();

const pool  = mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'devcamp',
  port: 8889,
});

app.use(async function (req, res, next) {
  next();
}) 

var router = express.Router();

router.get('/user/:id', async (req, res, next) => {
  console.log('set variable')
  const [rows] = await pool.query('SELECT * from user WHERE id = ?',[req.params.id]);
  req.myJSON = rows;
  next();
 });

router.get('/student/:id', async (req, res, next) => {
  const [rows] = await pool.query('SELECT * from student WHERE id = ?',[req.params.id]);
  req.myJSON = rows;
  next();
})

app.use('/', router);

app.use(async function (req, res, next) {
  const myDate = new Date();
  const additionJSON = {
    data: req.myJSON,
    additionalData:{ userId: 1,
    dateTime:  myDate.getFullYear() + '-' + ("0" + myDate.getMonth()).slice(-2)  + '-' + ("0" + myDate.getDate()).slice(-2) + ' ' + ("0" + myDate.getHours()).slice(-2) + ':' + ("0" + myDate.getMinutes()).slice(-2) + ':' + ("0" + myDate.getSeconds()).slice(-2) 
   }
    
  }
  res.json(additionJSON);
}); // Stop and send Forbidden

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
