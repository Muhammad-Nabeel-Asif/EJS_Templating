const express = require("express");
const app = express();
// In order to globally set access to views folder file (.ejs) , we are requiring path
const path = require("path");

//In app.set , we are giving paths to access home.ejs file in the views folder:
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// sending get request and the rendering the response from server as file : home.ejs
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(3000, () => {
  console.log("listening on port : 3000");
});
