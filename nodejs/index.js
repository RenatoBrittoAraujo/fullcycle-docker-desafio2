const express = require("express");
const app = express();
const port = 8080;

const config = {
  host: "db",
  user: "root",
  password: "root",
  dataset: "nodedb",
};

const mysql = require("mysql2/promise");
const connection = await mysql.createConnection(config);
console.log("DB CONNECTED!!!!!");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  const command = `INSERT INTO textos(texto) values('${res.json()}')`;
  connection.query(sql);
});

app.listen(port, () => {
  console.log("dickballs");
  console.log(`Example app listening at http://localhost:${port}`);
});
