const express = require("express");
const app = express();
const dbconnect = require("./config/database");

dbconnect();

app.use(express.json());

const port = 3001 || process.env.PORT;
app.listen(port, () => {
  console.log(`Express app is connected ${port}`);
});
