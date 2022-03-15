const express = require("express");
const path = require("path");
const app = express();

const staticPath = path.join(__dirname, "assets");

console.log(staticPath);

app.set("view engine", "ejs");

app.use("/style", express.static("assets"));
app.use("/scripts", express.static('assets'));
app.use("/img", express.static("assets/images"));

app.get("/", (req, res) => {
  //   const data = [
  //     {
  //       name: "Demon Slayer",
  //       imgUrl: "/img/demonslayer.png",
  //     },
  //     {
  //       name: "luffy",
  //       imgUrl: "/img/luffy.jpg",
  //     },
  //     {
  //       name: "Gojo",
  //       imgUrl: "/img/gojo.jpg",
  //     },
  //     {
  //       name: "Jujutsu",
  //       imgUrl: "/img/jujutsu.jpg",
  //     },
  //     {
  //       name: "Naruto",
  //       imgUrl: "/img/naruto.png",
  //     },
  //   ];
  res.render("base");
});

app.listen(4000);
