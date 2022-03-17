const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use("/design", express.static("assets"));
app.use("/page", express.static("public"));

app.get("/", (req, res) => {
  res.render("base");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
