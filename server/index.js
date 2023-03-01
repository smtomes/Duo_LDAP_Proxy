const express = require("express");
const path = require("path");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/", express.static(path.resolve(__dirname, "public")));
app.use("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "dist", "index.html"));
});

app.listen(8080, () => {
  console.log("listening on", 8080);
});
