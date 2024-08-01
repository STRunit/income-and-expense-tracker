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
   name VARCHAR(50) NOT NULL,
   email VARCHAR(50) UNIQUE NOT NULL,
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
  const { name, email, password, avatar_img, currency_type } = req.body;

  const queryText = `
  INSERT INTO users (name, email, password, avatar_img, currency_type)
  VALUES($1, $2, $3, $4, $5) RETURNING *;
  `;

  try {
    await db.query(queryText, [
      name,
      email,
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

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const result = await db.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [name, email, id]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
