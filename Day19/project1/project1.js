const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3001;
const mysql = require("mysql2");
const cors = require('cors');

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.get("/api/employee/:id", (req, res) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'hr_data',
      port: 8889,
    });
    connection.connect();
    connection.query(
      `select * from employee where id = ${req.params.id}`,
      (err, result, fields) => {
        if (rows.length !== 0) {
          res.status(200).json(result);
        } else {
          res.status(400).send("No Employee in database");
        }
      }
      
    );
    connection.end();
  });

  app.get("/api/company/:id", (req, res) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'hr_data',
      port: 8889,
    });
    connection.connect();
    connection.query(
      `select * from company where id = ${req.params.id}`,
      (err, result, fields) => {
        if (rows.length !== 0) {
          res.status(200).json(result);
        } else {
          res.status(400).send("No Company in database");
        }
      }
      
    );
    connection.end();
  });

  app.post("/api/employee", (req, res) => {
      console.log(req.body);
    const connection = mysql.createConnection({
        host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'hr_data',
      port: 8889,
    });
    connection.connect();
    connection.query(
        `insert into employee (firstname, lastname, phone,email,address,subdistrict,district,province,postcode,id_number) values ('${req.body.firstname}' , '${req.body.lastname}', '${req.body.phone}', '${req.body.email}', '${req.body.address}', '${req.body.subdistrict}', '${req.body.district}', '${req.body.province}', '${req.body.postcode}', '${req.body.id_number}')`,
        (err, result, field) => {
            console.log(err);
            res.json({ new_employee: result
            });
        }
    );
    connection.end();
});

app.post("/api/company", (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'hr_data',
      port: 8889,
    });
    connection.connect();
    connection.query(
        `insert into company (company_name, company_address, work_experience, position, id_number) values ('${req.body.company_name}' , '${req.body.company_address}', ${req.body.work_experience}, '${req.body.position}', ${req.body.id_number})`,
        (err, result, field) => {
            console.log(err);
            res.json({ new_company: result
            });
        }
    );
    connection.end();
});

app.put("/api/company/:id", (req, res) => {
    const connection = mysql.createConnection({
        host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'hr_data',
      port: 8889,
    });
    connection.connect();
    connection.query(
        `update product set company_name = '${req.body.company_name}' , company_address = ${req.body.company_address}, work_experience = '${req.body.work_experience}', position = '${req.body.position}' where id = ${req.params.id}`,
        (err, result, field) => {
            if (rows.affectedRows == 1) {
                res.status(200).json(result);
            } else {
                res.status(400).send("ID does not exist in database");
            }
        }
    );
    connection.end();
});
app.delete("/api/employee/:id", (req, res) => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hr_data',
    port: 8889,
  });
  connection.connect();
  connection.query(
    `delete from company where id = ${req.params.id}`,
    (err, result, fields) => {
      if (rows.affectedRows == 1) {
        res.status(200).json(result);
      } else {
        res.status(400).send("CANNOT DELETE. No Employee in database");
      }
    }
  );
  connection.end();
});

app.delete("/api/company/:id", (req, res) => {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'hr_data',
      port: 8889,
    });
    connection.connect();
    connection.query(
      `delete from company where id = ${req.params.id}`,
      (err, result, fields) => {
        if (rows.affectedRows == 1) {
          res.status(200).json(result);
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