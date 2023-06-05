function createTemplate({ name, phone, email, category, target, reviewText }) {
  const food = `- Категория: Еда
- Наименование: ${target !== null ? target : ""}
- Текст: ${reviewText}`;

  const staff = `- Категория: Персонал
- Имя: ${target !== null ? target : ""}
- Текст: ${reviewText}`;

  const other = `- Категория: Другое
- Текст: ${reviewText}`;

  const withName = `- Имя: ${name}`;

  const withPhone = `- Имя: ${name}
- Номер телефона: ${phone}`;

  const withEmail = `- Имя: ${name}
- Номер телефона: ${phone}
- Адрес почты: ${email}`;

  const sender =
    phone !== null && email !== null ? withEmail : phone !== null ? withPhone : withName;

  const whichCategory =
    category === "food" ? food : category === "other" ? other : staff;

  const review = `Отправитель:
${sender}
  
Отзыв:
${whichCategory}`;

  return encodeURIComponent(review);
}

module.exports = createTemplate;
