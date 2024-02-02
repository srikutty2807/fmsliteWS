import express from "express";

import { readdirSync } from "fs";

require("dotenv").config();
const app = express();
app.use(express.json());
app.listen(process.env.PORT, () => {
  app.get("/", async (req, res) => {
    res.status(200).send({ success: "Success" });
  });
  console.log("Server is running on port" + process.env.PORT);
});
readdirSync("./Route").map((file) =>
    app.use(require("./Route/" + file))
);
module.exports = app;