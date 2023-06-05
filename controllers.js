require("dotenv").config();
const axios = require("axios");
const createTemplate = require("./utils/createTemplate");

const wasabi = {
  token: process.env.WASABI_TOKEN,
  chatID: process.env.WASABI_CHAT_ID,
};

const theLoft = {
  token: process.env.THELOFT_TOKEN,
  chatID: process.env.THELOFT_CHAT_ID,
};

module.exports.reviewController = {
  wasabi: async (req, res) => {
    try {
      const { name, phone, email, category, target, reviewText } = req.body;

      const review = createTemplate({
        name,
        phone,
        email,
        category,
        target,
        reviewText,
      });

      await axios(
        `https://api.telegram.org/bot${wasabi.token}/sendMessage?chat_id=${wasabi.chatID}&text=${review}`
      );

      res.json("Отзыв отправлен успешно!");
    } catch (error) {
      res.json("Ошибка при отправке отзыва ==> " + error);
    }
  },

  theLoft: async (req, res) => {
    try {
      const { name, phone, category, target, reviewText } = req.body;

      const review = createTemplate({
        name,
        phone,
        email: null,
        category,
        target,
        reviewText,
      });

      await axios(
        `https://api.telegram.org/bot${theLoft.token}/sendMessage?chat_id=${theLoft.chatID}&text=${review}`
      );

      res.json("Отзыв отправлен успешно!");
    } catch (error) {
      res.json("Ошибка при отправке отзыва ==> " + error);
    }
  },
};
