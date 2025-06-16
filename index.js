const { Client, Collection, } = require("discord.js");
const { token } = require("./Source/Config/botConfig")
const chalk = require("chalk")
const times = new Date();

const bot = (global.client = new Client({
  fetchAllMembers: true,
  allowedMentions: {
    parse: ["users", "roles", "everyone"],
    repliedUser: true,
  },
  partials: ["message", "channel", "reactıon"],
  intents: 3276543
}));

bot.Public = new Collection();
bot.default_Cmd = new Collection();
bot.aliases = new Collection();
bot.guildInvites = new Map();
bot.guildVaintyInvites = new Map();
require("discord-logs")(bot, { debug: false });

require("./Source/Handlers/eventHandler");
require("./Source/Handlers/commandHandler");
/*
const commandsLog = require("./Source/Events/servers Events/commandsLog");
bot.on("interactionCreate", async (interaction) => {
  commandsLog(interaction, interaction);
});
*/


bot.on('ready', () => {
  checkGuilds(bot);
});

async function checkGuilds(client) {
  const guilds = client.guilds.cache;

  for (const guild of guilds.values()) {
    try {
      const memberCount = guild.memberCount;
      if (memberCount < 30) {
        await guild.leave();
        console.log(`${memberCount} kişilik sunucudan çıktım (30'dan az)`);
      }
    } catch (err) {
      console.error(`❌ Hata: ${err}`);
    }
  }
}

bot
  .login(token)
  .then((x) => console.log(chalk.blue(`${times.toLocaleString()}`) + chalk.magenta(` [BOT] `) + chalk.white(`Successfully [${bot.user.username}] activated.`)))
  .catch((err) => console.log(chalk.blue(`${times.toLocaleString()}`) + (chalk.red(` [BOT] `) + chalk.bgRed("Failed to login:\n" + err))));
