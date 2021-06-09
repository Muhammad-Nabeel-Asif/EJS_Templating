const express = require("express");
const app = express();
// In order to globally set access to views folder file (.ejs) , we are requiring path
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "public")));

//In app.set , we are giving paths to access home.ejs file in the views folder:
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// sending get request and the rendering the response from server as file : home.ejs
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  // passing object to ejs file
  res.render("random.ejs", { num });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit.ejs", { ...data });
  } else {
    res.render("notfound.ejs", { subreddit });
  }
});

app.get("/cats", (req, res) => {
  const cats = ["Blue", "Rocket", "Mano", "rimmy", "deno"];
  res.render("cats.ejs", { cats });
});

app.listen(3000, () => {
  console.log("listening on port : 3000");
});
