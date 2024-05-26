const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(os.hostname());
  res.end();
});

app.listen(5000, () => {
  console.log("Server is Running on port 5000");
});
