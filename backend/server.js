const express = require("express");
const dotenv = require("dotenv")
const data = require("./data/data");

const app = express();
dotenv.config()
app.get("/", (req, res) => {
  res.send("API running ...");
});
app.get("/api/get-all-product", (req, res) => {
  res.json(data);
});

app.get("/api/get-all-product/:id", (req, res) => {
  const findId = data.find((item) => item.id === req.params.id);
  res.send(findId);
});

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
