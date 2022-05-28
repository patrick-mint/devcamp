const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;
const mysql = require('mysql2/promise')
const cors = require('cors');

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const pool  = mysql.createPool({
  connectionLimit : 10,
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'hr_data',
  port: 8889,
});

app.get("/api/employee/:id", async function (req, res, next) {
  let [rows, fields] = await pool.query(
      `select * from employee where id = ${req.params.id}`)
          res.status(200).json(rows)
  })

  app.get("/api/company/:id",async function (req, res, next) {
    let [rows, fields] = await pool.query(
      `select * from company where id = ${req.params.id}`)
      res.status(200).json(rows)
  })
      
  app.post("/api/employee", async function (req, res, next) {
    let [rows, fields] = await pool.query(
        `insert into employee (firstname, lastname, phone,email,address,subdistrict,district,province,postcode,id_number) values ('${req.body.firstname}' , '${req.body.lastname}', '${req.body.phone}', '${req.body.email}', '${req.body.address}', '${req.body.subdistrict}', '${req.body.district}', '${req.body.province}', '${req.body.postcode}', '${req.body.id_number}')`)
        res.json({ new_employee: rows });
});

app.post("/api/company", async function (req, res, next) {
  let [rows, fields] = await pool.query(
        `insert into company (company_name, company_address, work_experience, position, id_number) values ('${req.body.company_name}' , '${req.body.company_address}', ${req.body.work_experience}, '${req.body.position}', ${req.body.id_number})`)
            res.json({ new_company: rows
            });
});

app.put("/api/company/:id",async function (req, res, next) {
  let [rows, fields] = await pool.query(
        `update product set company_name = '${req.body.company_name}' , company_address = ${req.body.company_address}, work_experience = '${req.body.work_experience}', position = '${req.body.position}' where id = ${req.params.id}`,
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
app.delete("/api/employee/:id",async function (req, res, next) {
  let [rows, fields] = await pool.query(
    `delete from company where id = ${req.params.id}`,
    (err, rows, fields) => {
      if (rows.affectedRows == 1) {
        res.status(200).json(rows);
      } else {
        res.status(400).send("CANNOT DELETE. No Employee in database");
      }
    }
  );
  connection.end();
});

app.delete("/api/company/:id",async function (req, res, next) {
  let [rows, fields] = await pool.query(
      `delete from company where id = ${req.params.id}`,
      (err, rows, fields) => {
        if (rows.affectedRows == 1) {
          res.status(200).json(rows);
        } else {
          res.status(400).send("CANNOT DELETE. No Company in database");
        }
      }
    );
    connection.end();
  });

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});