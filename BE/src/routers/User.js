// import express from "express";
// import {
//   createUser,
//   deleteUser,
//   getUsers,
//   getUser,
//   updateUser,
// } from "../controllers/User.js";

// const user = express.Router();

// user
//   .get("/", getUsers)
//   .get("/:id", getUser)
//   .post("/create", createUser)
//   .put("/:id", updateUser)
//   .delete("/:id", deleteUser);

// export { user };

import _ from "lodash"

const mockData = [
  {
      balance: 10000,
      userId: "user-3"
  },
  {
      balance: 20000,
      userId: "user-2"
  },{
      balance: 30000,
      userId: "user-1"
  },{
      balance: 40000,
      userId: "user-3"
  },{
      balance: 50000,
      userId: "user-2"
  },{
      balance: 60000,
      userId: "user-1"
  },
] 

const result = _.groupBy(mockData, (data) => data.userId);

_.map(result, (user) => {
  console.log(user);
  
})


console.log(result);
console.log(user);

