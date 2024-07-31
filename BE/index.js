import bodyParser from "body-parser";
import express from "express";
import fs from "node:fs";

const app = express();
const port = 8000;

const data = [];

app.use(bodyParser.json());

app.get("/write", (req, res) => {
  data.push(req.body);
  fs.writeFile(
    "/Users/24LP5175/Lesson/Shijirbaatar/income-and-expense-tracker/be/DATA.txt",
    (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("File Written Succesfully");
      }
    }
  );
  res.send("Succesful");
});

app.post("/read", (req, res) => {
  fs.readFile(
    "/Users/24LP5175/Lesson/Shijirbaatar/income-and-expense-tracker/be/DATA.txt",
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
    }
  );
  res.send(data);
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
