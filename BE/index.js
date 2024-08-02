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

// USER TABLE

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
  res.send("user created succesfully");
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

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query("DELETE FROM users WHERE id = $1", [id]);

    res.send("user deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

// RECORD TABLE

app.get("/record", async (req, res) => {
  let tableQueryText = `
  CREATE TABLE "record" (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id TEXT,
    name TEXT,
    amount REAL NOT NULL,
    transaction_type TEXT DEFAULT 'INC, EXP' NOT NULL,
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id TEXT
    )`;

  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("record table created succesfully");
});

app.post("/record/create", async (req, res) => {
  const { user_id, name, amount, transaction_type, description, category_id } =
    req.body;

  const queryText = `
  INSERT INTO record (user_id, name, amount, transaction_type, description, category_id)
  VALUES($1, $2, $3, $4, $5, $6) RETURNING *;
  `;

  try {
    await db.query(queryText, [
      user_id,
      name,
      amount,
      transaction_type,
      description,
      category_id,
    ]);
  } catch (error) {
    console.log(error);
  }
  res.send("record user created succesfully");
});

app.get("/record/get", async (req, res) => {
  const queryText = `
  SELECT * FROM record
  `;

  try {
    const result = await db.query(queryText);
    res.send(result.rows);
  } catch (error) {
    console.log(error);
  }
});

app.put("/record/:id", async (req, res) => {
  const { id } = req.params;
  const { user_id, name, amount, transaction_type, description, category_id } =
    req.body;

  try {
    const result = await db.query(
      "UPDATE record SET user_id = $1, name = $2, amount = $3, transaction_type = $4, description = $5, category_id = $6 WHERE id = $7 RETURNING *",
      [user_id, name, amount, transaction_type, description, category_id, id]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: "Record not found" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.delete("/record/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query("DELETE FROM record WHERE id = $1", [id]);

    res.send("record user deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
