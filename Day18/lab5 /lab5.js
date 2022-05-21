const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = require('./user.json');

app.put('/user/:id', function (req, res, next) {
 const replaceId = req.params.id;  
 const position = users.findIndex(function (val) {
   return val.id == replaceId;
 });
 console.log(users[position]);
 try {
   users[position].name = req.body.name;
   users[position].age = Number(req.body.age);
   users[position].movie = req.body.movie;
   return res.status(200).json({
     code: 1,
     message: 'OK',
     data: users
   });
 } catch (error) {
   res.status(404).send('Not Found');
 }
 });

app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}`);
});

