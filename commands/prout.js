const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prout')
		.setDescription('Effectue un PET en plein dans ta face.'),
	async execute(interaction) {
		await interaction.reply("Et c'est le Prout");
	},
};