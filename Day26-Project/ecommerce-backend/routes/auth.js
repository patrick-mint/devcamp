var express = require('express');
var router = express.Router();

const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// (POST) /api/auth/token
router.post('/token', async function (req, res) {
    const { username, password } = req.body; // รับ post json object

    const connection = await mysql.createConnection({
      host: 'ls-627c904378ee6cbf5e370668a843a6d720b988ae.csk6wbdj0thx.ap-southeast-1.rds.amazonaws.com',
      user: 'mintler',
      password: 'Databasemintler',
      database: 'dbmaster',
      port: 3306,
    });
   
    const result = await connection.query(
      `SELECT * FROM user WHERE username='${username}'`
    );
    // ปิด connection
    await connection.end();
   
    // พบ record
    if (result[0].length > 0) {
      const passwordMatch = await bcrypt.compare(password, result[0][0].password);
      if (passwordMatch) {
      // JWT implementation here
     const privateKey = 'codecamp_very_$secr3T!';
     const token = jwt.sign(
       {
         id: result[0][0].id,
         username: result[0][0].username,
       },
       privateKey,
       { expiresIn: '300000ms' }
     );
     res.json({ token: token });
       
      } else {
        res.status(401).send({ error: 'invalid credential' });
        return;
      }
    } else {
      res.status(401).send({ error: 'user not found' });
      return;
    }
   
});



module.exports = router;

