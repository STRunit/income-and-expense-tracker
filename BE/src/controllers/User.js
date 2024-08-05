import { db } from "../../db.js";

export const createUser = async (req, res) => {
  const { name, email, password, avatar_img, currency_type } = req.body;

  const queryText = `
    INSERT INTO "user" (name, email, password, avatar_img, currency_type)
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
};

export const getUsers = async (req, res) => {
  const queryText = `
    SELECT * FROM "user"
    `;
  try {
    const result = await db.query(queryText);
    res.send(result.rows);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  const queryText = `
    SELECT * FROM "user" WHERE id = $1
    `;
  try {
    const result = await db.query(queryText, [id]);
    res.send(result.rows);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, avatar_img, currency_type } = req.body;

  try {
    const result = await db.query(
      `UPDATE "user" SET name = $1, email = $2, password = $3, avatar_img = $4, currency_type = $5 WHERE id = $6 RETURNING *`,
      [name, email, password, avatar_img, currency_type, id]
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
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query("DELETE FROM user WHERE id = $1", [id]);

    res.send("user deleted");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};
