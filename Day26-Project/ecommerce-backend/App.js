const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const mysql = require("mysql2");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var profileRouter = require('./routes/profile');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get("/api/product", (req, res) => {
    const connection = mysql.createConnection({
      host: 'ls-627c904378ee6cbf5e370668a843a6d720b988ae.csk6wbdj0thx.ap-southeast-1.rds.amazonaws.com',
      user: 'mintler',
      password: 'Databasemintler',
      database: 'dbmaster',
      port: 3306,
    });
    connection.connect();
    connection.query(
      `select * from product`,
      (err, rows, fields) => {
        if (rows.length !== 0) {
          res.status(200).json(rows);
        } else {
          res.status(400).send("No products in database");
        }
      }
    );
    connection.end();
  });

app.post("/api/product", (req, res) => {
    const connection = mysql.createConnection({
      host: 'ls-627c904378ee6cbf5e370668a843a6d720b988ae.csk6wbdj0thx.ap-southeast-1.rds.amazonaws.com',
      user: 'mintler',
      password: 'Databasemintler',
      database: 'dbmaster',
      port: 3306,
    });
    connection.connect();
    connection.query(
        `insert into product (product_name, stock_left, category) values ('${req.body.product_name}' , '${req.body.stock_left}', '${req.body.category}')`,
        (err, rows, field) => {
            res.json({new_product: rows
            });
        }
    );
    connection.end();
});

app.put("/api/product/:id", (req, res) => {
    const connection = mysql.createConnection({
      host: 'ls-627c904378ee6cbf5e370668a843a6d720b988ae.csk6wbdj0thx.ap-southeast-1.rds.amazonaws.com',
      user: 'mintler',
      password: 'Databasemintler',
      database: 'dbmaster',
      port: 3306,
    });
    connection.connect();
    connection.query(
        `update product set product_name = '${req.body.product_name}' , stock_left = ${req.body.stock_left}, category = '${req.body.category}' where id = ${req.params.id}`,
        (err, rows, field) => {
            if (rows.affectedRows == 1) {
                res.status(200).json(rows);
            } else {
                res.status(400).send("ID does not exist in database");
            }
        }
    );
    connection.end();
});

  app.delete("/api/product/:id", (req, res) => {
    const connection = mysql.createConnection({
      host: 'ls-627c904378ee6cbf5e370668a843a6d720b988ae.csk6wbdj0thx.ap-southeast-1.rds.amazonaws.com',
      user: 'mintler',
      password: 'Databasemintler',
      database: 'dbmaster',
      port: 3306,
    });
    connection.connect();
    connection.query(
      `delete from product where id = ${req.params.id}`,
      (err, rows, fields) => {
        if (rows.affectedRows == 1) {
          res.status(200).json(rows);
        } else {
          res.status(400).send("CANNOT DELETE. No product in database");
        }
      }
    );
    connection.end();
  });

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;