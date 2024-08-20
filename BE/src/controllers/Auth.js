import { createUser, getUser } from "./user.js";
import bcrypt from "bcrypt";
import { db } from "../../db.js";

export const signUp = async (req, res) => {
  try {
    const user = await createUser(req, res);
    console.log(user,'user');
    
    return res.status(200).json({ success: true, user: user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Database error" });
  }
};

export const signIn = async (req, res) => {
  const { password, email } = req.body;

  try {
    const { email } = req.body;
    const queryText = `
      SELECT * FROM "user" WHERE email = $1
      `;
    const user = await db.query(queryText, [email]);

    await bcrypt.compare(password, user.rows[0].password, (err, result) => {
      if (result) {
        res.send({ success: true, user: user.rows[0] });
      } else {
        res.send({ error: "Invalid email or password" });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Database error" });
  }
};
