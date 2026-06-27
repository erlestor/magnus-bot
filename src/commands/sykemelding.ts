import { CommandInteraction, SlashCommandBuilder } from "discord.js"

export const data = new SlashCommandBuilder()
  .setName("sykemelding")
  .setDescription("Spør Magnus bot om en sykemelding")

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Sykemelding gitt. [Signatur]")
}
