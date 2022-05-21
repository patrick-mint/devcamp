const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = require('./user.json');

app.post('/user', function (req, res, next) {
 let user = {}
 user.id = users.length + 1
 user.name = req.body.name;
 user.age = Number(req.body.age);
 user.movie = req.body.movie;
 users.push(user);
 console.log('Users :', user.name, 'Created!')
 return res.status(201).json({
   code: 1,
   message: 'OK',
   data: users
 });  
});

app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}`);
});

