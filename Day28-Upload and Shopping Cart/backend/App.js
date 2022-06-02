const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const mysql = require("mysql2");
const fileupload = require("express-fileupload");
const path = require('path')
const cors = require('cors');

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(fileupload());
app.use(cors())

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get("/api/product/:id", (req, res) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'stocks',
      port: 8889,
    });
    connection.connect();
    connection.query(
      `select * from product where id = ${req.params.id}`,
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
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'stocks',
        port: 8889,
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
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'stocks',
        port: 8889,
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

app.post("/upload", (req, res) => {
  console.log(req.files);
    const newpath = __dirname + "/public/upload-files/";
    const file = req.files.file;
    const filename = file.name;

    // console.log(`${newpath}${filename}`);
   
    file.mv(`${newpath}${filename}`, (err) => {
      if (err) {
        res.status(500).send({ message: "File upload failed", code: 200 });
      }
      res.status(200).send({ message: "File Uploaded", code: 200 });
    });
  });
  

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});