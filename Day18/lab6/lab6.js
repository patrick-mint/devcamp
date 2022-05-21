const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = require('./user.json');

app.delete('/user/:id', function(req, res, next) {
   const removeId = req.params.id;
   try {
       const position = users.findIndex((val) => {
           return val.id == removeId;
       });
       console.log(position)
       users.splice(position, 2);
       console.log(users)
       return res.status(200).json({
           code: 1,
           message: 'OK',
           data: users
       })
   } catch (error) {
       res.status(404).send('Not Found');
   }
});

app.listen(port, () => {
   console.log(`Listening at http://localhost:${port}`);
});

