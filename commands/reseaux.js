const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reseaux')
		.setDescription('Répond avec les réseaux sociaux du Herbiv.'),
	async execute(interaction) {
		await interaction.reply('Twitter : <https://twitter.com/herbivTV> \nTiktok : <https://www.tiktok.com/@herbiv.twitch> \nTwitch : <https://www.twitch.tv/herbiv>');
	},
};