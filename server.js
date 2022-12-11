const express = require("express");
const app = express();

// putting top of the code make logger middleware works everywhere
//app.use(logger);
app.set("view engine", "ejs");

// logger function can be chained in here and only works at "/" 
// app.get("/", logger, (req, res) => {
app.get("/", (req, res) => {
  res.render("index", { text: "some text from server" });
});

// if logger use call was in here, would work only for users router
//app.use(logger);

const userRouter = require("./routes/users");

app.use("/users", userRouter);

/* function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
} */

app.listen(3001);
