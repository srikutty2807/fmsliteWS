const express = require("express");
const app = express();
const { readdirSync } = require("fs");
const Router = require("./Route/Router");
require("dotenv").config();

app.use(express.json());
app.listen(process.env.PORT, () => {
  app.get("/", async (req, res) => {
    res.status(200).send({ success: "Success" });
  });
  console.log("Server is running on port" + process.env.PORT);
});
readdirSync("./Route").map((file) =>
    app.use("/api", require("./Route/" + file))
);
module.exports = app;