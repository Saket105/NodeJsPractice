const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use("/img", express.static("assets/images"));
app.use("/style", express.static("assets/style"));
app.use("/scripts", express.static("assets"));

app.get("/", (req, res) => {
  res.render("base");
});

app.listen(3000, () => {
  console.log("your server is running on  http://localhost:3000");
});
