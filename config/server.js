require("dotenv").config();
module.exports = {
  APPLICATION_ID: process.env.APPLICATION_ID,
  SECRET: process.env.SECRET,
  CALLBACK_URL: process.env.CALLBACK_URL
};
