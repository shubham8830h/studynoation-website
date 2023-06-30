const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbconnect = () => {
  mongoose
    .connect(process.env.DBURL, { useNewUrlParser: true })
    .then(() => console.log("MongooDb is connected..@@@"))
    .catch((err) => console.log(err));
};

module.exports = dbconnect;
