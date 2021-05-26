const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/threeD.js", (req, res) => {
  res.sendFile(path.join(__dirname, "/threeD.js"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
