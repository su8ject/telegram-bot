module.exports = {
  buttons: {
    reply_markup: JSON.stringify({
      inline_keyboard: [[{ text: "info", callback_data: "info" }]],
    }),
  },
};
