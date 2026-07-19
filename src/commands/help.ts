import { CommandInteraction, SlashCommandBuilder } from "discord.js"

export const data = new SlashCommandBuilder()
  .setName("help")
  .setDescription("Oppgir mulige kommandoer botten har")

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Mulige kommandoer:\n/sykemelding\n/legetime")
}
