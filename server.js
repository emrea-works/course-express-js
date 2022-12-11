const express = require("express");
const app = express();

app.use(express.static("public"))

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { text: "some text from server" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3001);
