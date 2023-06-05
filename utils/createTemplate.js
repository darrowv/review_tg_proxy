function createTemplate(name, phone, email, category, target, reviewText) {
  const food = `- Категория: Еда
- Наименование: ${target !== null ? target : ""}
- Текст: ${reviewText}`;

  const staff = `- Категория: Персонал
- Имя: ${target !== null ? target : ""}
- Текст: ${reviewText}`;

  const other = `- Категория: Другое
- Текст: ${reviewText}`;

  const withName = `- Имя: ${name === "" ? "не указано" : name}`;

  const withPhone = `- Имя: ${name === "" ? "не указано" : name}
- Номер телефона: ${phone === "" ? "не указано" : phone}`;

  const withEmail = `- Имя: ${name === "" ? "не указано" : name}
- Номер телефона: ${phone === "" ? "не указано" : phone}
- Адрес почты: ${email === "" ? "не указано" : email}`;

  const sender =
    phone !== undefined && email !== undefined ? withEmail : phone !== undefined ? withPhone : withName;

  const whichCategory =
    category === "food" ? food : category === "other" ? other : staff;

  const review = `Отправитель:
${sender}
  
Отзыв:
${whichCategory}`;

  return encodeURIComponent(review);
}

module.exports = createTemplate;
