import bodyParser from "body-parser";
import express from "express";
import fs from "node:fs";
import cors from "cors";
import { db } from "./db.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

app.get("/installExtension", async (req, res) => {
  const tableQueryText = `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  db.query(tableQueryText);
  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("extension installed successfully");
});

// CREATE TYPE currency_type AS ENUM ('MNT','USD');

app.get("/", async (req, res) => {
  let tableQueryText = `
  CREATE TABLE "users" (
   id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
   email VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    password TEXT,
    avatar_img TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    currency_type TEXT DEFAULT 'MNT, USD' NOT NULL
    )`;

  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("table created succesfully");
});

app.post("/users/create", async (req, res) => {
  const { email, name, password, avatar_img, currency_type } = req.body;

  const queryText = `
  INSERT INTO users (email, name, password, avatar_img, currency_type)
  VALUES($1, $2, $3, $4, $5) RETURNING *;
  `;

  try {
    await db.query(queryText, [
      email,
      name,
      password,
      avatar_img,
      currency_type,
    ]);
  } catch (error) {
    console.log(error);
  }
  res.send("user inserted succesfully");
});

app.get("/users", async (req, res) => {
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
