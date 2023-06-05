require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const whiteList = ["https://wasabi-reviews.ru", "https://the-loft-reviews.ru"];

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: whiteList }));

app.use(require("./routes/telegram.route"));

app.listen(port, () => {
  console.log("Server started on port " + port);
});
