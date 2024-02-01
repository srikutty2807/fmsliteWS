const express = require("express");
const app = express();

const Router = require("./Route/Router");
require("dotenv").config();

app.use(express.json());
app.listen(process.env.PORT, () => {
  app.get("/", async (req, res) => {
    res.status(200).send({ success: "Success" });
  });
  console.log("Server is running on port" + process.env.PORT);
});
app.use("/api", Router);
module.exports = app;