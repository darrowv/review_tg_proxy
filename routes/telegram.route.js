require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const createTemplate = require("../utils/createTemplate");

const wasabi = {
  token: process.env.WASABI_TOKEN,
  chatID: process.env.WASABI_CHAT_ID,
};

const theLoft = {
  token: process.env.THELOFT_TOKEN,
  chatID: process.env.THELOFT_CHAT_ID,
};

const router = Router();

router.post("/wasabi", async (req, res) => {
  try {
    const { name, category, target, reviewText } = req.body;

    let phone = req.body.phone;
    let email = req.body.email;

    const review = createTemplate(name, phone, email, category, target, reviewText);

    await axios(
      `https://api.telegram.org/bot${wasabi.token}/sendMessage?chat_id=${wasabi.chatID}&text=${review}`
    );

    res.json("Отзыв отправлен успешно!");
  } catch (error) {
    res.json("Ошибка при отправке отзыва ==> " + error);
  }
});

router.post("/the-loft", async (req, res) => {
  try {
    const { name, category, target, reviewText } = req.body;

    let phone = req.body.phone;
    let email = req.body.email;

    const review = createTemplate(name, phone, email, category, target, reviewText);

    await axios(
      `https://api.telegram.org/bot${theLoft.token}/sendMessage?chat_id=${theLoft.chatID}&text=${review}`
    );

    res.json("Отзыв отправлен успешно!");
  } catch (error) {
    res.json("Ошибка при отправке отзыва ==> " + error);
  }
});

module.exports = router;
