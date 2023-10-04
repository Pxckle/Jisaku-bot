const { AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
  token: process.env.TOKEN,
  prefix: "j.",
  intents: ["MessageContent", "GuildMessages", "Guilds", "GuildMembers"],
  events: ["onJoin", "onMessage", "onInteractionCreate"]
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/")

bot.status({
    text: "The Homebrew Launcher",
    type: "PLAYING",
    time: 12
});

bot.status({
    text: "j. help",
    type: "PLAYING",
    time: 12
});

bot.command({
  name: "eval",
  code: `
  $eval[$message]`
})