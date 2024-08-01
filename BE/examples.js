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
