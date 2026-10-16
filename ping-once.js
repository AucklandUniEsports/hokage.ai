// One-off: ping a user by username with a link, then exit.
// Usage: node ping-once.js <channelId> <link> [username]

import 'dotenv/config';
import { Client, Events, IntentsBitField } from 'discord.js';

const [channelId, link, username = 'zzzebul'] = process.argv.slice(2);

if (!channelId || !link) {
	console.error('Usage: node ping-once.js <channelId> <link> [username]');
	process.exit(1);
}

const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
	],
});

client.once(Events.ClientReady, async () => {
	try {
		const channel = await client.channels.fetch(channelId);
		const found = await channel.guild.members.fetch({ query: username, limit: 10 });
		const member = found.find((m) => m.user.username.toLowerCase() === username.toLowerCase());

		if (!member) {
			console.error(`Couldn't find a member named "${username}" in ${channel.guild.name}.`);
			return;
		}

		await channel.send(`<@${member.id}> ${link}`);
		console.log(`Pinged ${member.user.tag} in #${channel.name}.`);
	}
	catch (err) {
		console.error(err);
	}
	finally {
		client.destroy();
	}
});

client.login(process.env.DISCORD_TOKEN);
