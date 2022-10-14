const TelegramApi = require("node-telegram-bot-api");
const { buttons } = require("./options");
const token = "5309642772:AAGnOgU-m9HVMk6BTsZICn2DxaowGtPrMmw";
const bot = new TelegramApi(token, { polling: true });

const start = () => {
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      await bot.sendSticker(
        chatId,
        "https://tlgrm.eu/_/stickers/1b5/0ab/1b50abf8-8451-40ca-be37-ffd7aa74ec4d/23.webp"
      );
      return bot.sendMessage(
        chatId,
        `Привіт ${msg.from.first_name} ${msg.from.last_name}`,
        buttons
      );
    }

    return bot.sendMessage(chatId, "Я тебе не зрозумів.");
  });

  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;

    return bot.sendMessage(chatId, `${data}`, buttons);
  });
};

start();
