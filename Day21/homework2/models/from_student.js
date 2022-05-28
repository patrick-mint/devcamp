const express = require('express');
var router = express.Router();

//Database
const pool = require('../config/database')

router.get('/student/:id', async (req, res, next) => {
   const [rows] = await pool.query('SELECT * from student WHERE id = ?',[req.params.id]);
   req.myJSON = rows;
   next();
 })

 
module.exports = router;