const { Client, CommandHandler } = require("@mengkodingan/ckptw");
const path = require("path");
const bot = new Client({
  name: "RGB",
  prefix: ".",
  autoRead: true,
});

bot.ev.once('ready', (m) => {
  console.log(`ready at ${m.user.id}`);
  bot.whats.sendMessage(`6281455037288@s.whatsapp.net`, {text: `bot online!`})
});

process.on('uncaughtException', function (err) {
  console.error(err);
  bot.whats.sendMessage(`6281455037288@s.whatsapp.net`, {text: `${err}`});
});

const cmdHandler = new CommandHandler(bot, `${path.resolve()}/commands/`);
cmdHandler.load();

bot.launch();
