import 'dotenv/config';
import { Client, Events, IntentsBitField } from 'discord.js';
import { hokageAnnouncement, hokageReply } from './hokage.js';


const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	],
});

// Sporadic messages: every 20-90 minutes, post in the most recently active
// channel, but only if someone has talked there in the last hour.
const MIN_GAP = 20 * 60 * 1000;
const MAX_GAP = 90 * 60 * 1000;
const ACTIVE_WINDOW = 60 * 60 * 1000;
const BUTT_IN_CHANCE = 0.03;

let lastChannel = null;
let lastActivity = 0;

const scheduleAnnouncement = () => {
	const delay = MIN_GAP + Math.random() * (MAX_GAP - MIN_GAP);
	setTimeout(async () => {
		if (lastChannel && Date.now() - lastActivity < ACTIVE_WINDOW) {
			await lastChannel.send(hokageAnnouncement()).catch(console.error);
		}
		scheduleAnnouncement();
	}, delay);
};

client.once(Events.ClientReady, (readyClient) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
	scheduleAnnouncement();
});

const isTalkingToHokage = async (message) => {
	if (message.mentions.users.has(client.user.id)) return true;
	if (/^hokage\b/i.test(message.content)) return true;
	if (message.reference) {
		const replied = await message.fetchReference().catch(() => null);
		return replied?.author.id === client.user.id;
	}
	return false;
};

client.on(Events.MessageCreate, async (message) => {
	if (message.author.bot) return;

	lastChannel = message.channel;
	lastActivity = Date.now();

	if (message.content.includes('fries in the bag')) {
		message.reply('https://tenor.com/view/fries-put-the-fries-in-the-bag-auec-shing-rar2024-gif-14587807542241918100');
		return;
	}
	if (message.content.includes('our house')) {
		message.reply('https://cdn.discordapp.com/attachments/886856324615376959/1421852479871647896/OurHouse.gif?ex=68fc290f&is=68fad78f&hm=7832070aeb19a09ab615f354315fdcb47426b9980cf86cb31ee46a61bcb04966&');
		return;
	}

	const buttingIn = Math.random() < BUTT_IN_CHANCE;
	if (!buttingIn && !(await isTalkingToHokage(message))) return;

	const text = message.content
		.replace(/<@!?\d+>/g, '')
		.replace(/^hokage\b[,:]?/i, '')
		.trim();

	// Pretend to "think" so it feels like a real person typing.
	await message.channel.sendTyping();
	setTimeout(() => {
		message.reply(hokageReply(text)).catch(console.error);
	}, 800 + Math.random() * 1500);
});

client.login(process.env.DISCORD_TOKEN);
