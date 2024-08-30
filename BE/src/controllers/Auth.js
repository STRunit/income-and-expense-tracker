// import { createUser, getUsers } from "./User.js";
// import bcrypt from "bcrypt";
// import { db } from "../../db.js";

// export const signUp = async (req, res) => {
//   const queryText = `
//     SELECT * FROM "user"
//     `;
//     const {password, email} = req.body
//   try {
//     const user = await db.query(queryText, [password, email])
//     if(password === user.password){
//       return res.status(200).json({ success: true, user: user });
//     }
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ error: "Database error" });
//   }
// };

// export const signIn = async (req, res) => {
  
//   const { email, password} = req.body;
//   try {
//   const user = await getUsers(req, res);

//     await bcrypt.compare(password, user.rows[0].password, (err, result) => {
//       if (result) {
//         res.send({ success: true, user: user.rows[0] });
//       } else {
//         res.send({ error: "Invalid email or password" });
//       }
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Database error" });
//   }
// };

import { db } from "../../db.js";
import bcrypt from 'bcrypt';

export const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const queryText = `
        INSERT INTO "user" (name, email, password )
        VALUES ($1, $2, $3) RETURNING *`;

        const result = await db.query(queryText, [
            name, 
            email,
            hashedPassword, 
        ]);

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        return res.status(404).json({ error: "Database error" });
    }
};

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const queryText = 'SELECT * FROM "user" WHERE email = $1';
        const result = await db.query(queryText, [email]);

        if (result.rows.length === 0) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const user = result.rows[0];
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ error: "Invalid email or password" });
        }
        res.status(200).json({ success: true, user: user});

    } catch (err) {
        console.error(err);
        return res.status(404).json({ error: "Database error" });
    }
};
