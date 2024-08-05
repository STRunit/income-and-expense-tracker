import bodyParser from "body-parser";
import express from "express";
import fs from "node:fs";
import cors from "cors";
import { db } from "./db.js";
import { user } from "./src/routers/user.js";
import { record } from "./src/routers/record.js";
import { category } from "./src/routers/category.js";

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use("/user", user);
app.use("/record", record);
app.use("/category", category);

// EXTENSION

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

// USER TABLE

app.get("/usertable", async (req, res) => {
  let tableQueryText = `
  CREATE TABLE "user" (
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
  res.send("user table created succesfully");
});

// RECORD TABLE

app.get("/recordtable", async (req, res) => {
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

//CATEGORY TABLE

app.get("/categorytable", async (req, res) => {
  let tableQueryText = `
  CREATE TABLE "category" (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100),
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_image TEXT
    )`;

  try {
    await db.query(tableQueryText);
  } catch (error) {
    console.error(error);
  }
  res.send("category table created succesfully");
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
