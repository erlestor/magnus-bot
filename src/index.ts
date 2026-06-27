import { Client } from "discord.js"

import { deployCommands } from "./deploy-commands"
import { config } from "./config"
import { commands } from "./commands"

const client = new Client({
  intents: ["Guilds", "GuildMessages", "DirectMessages", "MessageContent"],
})

client.once("ready", async () => {
  console.log("Discord bot is ready! 🤖")
  await deployCommands({ guildId: config.GUILD_ID })
})

// register commands when added to a server
client.on("guildCreate", async (guild) => {
  await deployCommands({ guildId: guild.id })
})

// article says "Run corresponding command when new user interaction has been created"
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return
  }
  const { commandName } = interaction
  if (commands[commandName as keyof typeof commands]) {
    commands[commandName as keyof typeof commands].execute(interaction)
  }
})
