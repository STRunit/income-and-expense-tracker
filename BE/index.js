import bodyParser from "body-parser";
import express from "express";
import fs from "node:fs";
import cors from "cors";
import { db } from "./db.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => {
  let tableQueryText = `
    CREATE TABLE IF NOT EXISTS "users" (
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE
    )`;

  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("table created succesfully");
});

app.get("/createUsers", async (req, res) => {
  const queryText = `
  INSERT INTO users (name, email)
  VALUES('Shijre', 'st21unit@gmail.com');
  `;

  try {
    await db.query(queryText);
  } catch (error) {
    console.log(error);
  }
  res.send("user inserted succesfully");
});

app.get("/getUsers", async (req, res) => {
  const queryText = `
  SELECT * FROM users
  `;

  try {
    const result = await db.query(queryText);
    res.send(result.rows);
  } catch (error) {
    console.log(error);
  }
});

// app.get("/", (req, res) => {
//   res.send("Hello Mother Father");

// });

// app.post("/write", (req, res) => {
//   const { body } = req;
//   const data = new Uint8Array(Buffer.from(JSON.stringify(body)));

//   fs.writeFile("./DATA.txt", data, "utf8", (err, data) => {
//     console.log(err, data);
//   });

//   res.send("success!");
// });

// app.get("/read", (req, res) => {
//   fs.readFile("./DATA.txt", "utf8", (err, data) => {
//     res.send(data);
//   });
// });

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
