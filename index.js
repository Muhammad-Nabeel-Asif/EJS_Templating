const express = require("express");
const app = express();
// In order to globally set access to views folder file (.ejs) , we are requiring path
const path = require("path");

//In app.set , we are giving paths to access home.ejs file in the views folder:
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// sending get request and the rendering the response from server as file : home.ejs
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  // passing object to ejs file
  res.render("random", { num });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.render("subreddit", { subreddit });
});

app.listen(3000, () => {
  console.log("listening on port : 3000");
});
