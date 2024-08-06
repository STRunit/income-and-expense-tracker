import express from "express";
import { signIn, signUp } from "../controllers/auth.js";

const auth = express.Router();

auth.post("/signup", signUp).post("/signin", signIn);

export { auth };
