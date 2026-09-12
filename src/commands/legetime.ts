import { CommandInteraction, SlashCommandBuilder } from "discord.js"

export const data = new SlashCommandBuilder()
  .setName("legetime")
  .setDescription("Få en legetime hos fastlege Magnus Lund")

export async function execute(interaction: CommandInteraction) {
  if (interaction.user.username === "oblaob")
    await interaction.reply("Din jævla homo")
  else await interaction.reply("Du har aids")
  // else await interaction.reply("Æ drept 21 kvinna kl 13:49 den 11 september 2026")
}
