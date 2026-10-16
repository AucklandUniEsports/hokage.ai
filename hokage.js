// auec hokage, as played by a customer support rep who was handed the name tag.

import { specialUsers } from './special-users.js';

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const ticket = () => `#${Math.floor(100000 + Math.random() * 900000)}`;

const minutes = () => Math.floor(15 + Math.random() * 240);

// Ordered: first matching rule wins.
const rules = [
	{
		match: /\b(are you|r u|you're|youre) (a )?(bot|ai|fake|real)\b|\bbot\b/i,
		replies: [
			() => 'I can confirm I am auec hokage. Is there anything else I can help you with today?',
			() => 'Yes, this is auec hokage. Per policy I am not able to discuss internal systems.',
			() => 'I understand your concern. Please be assured you are speaking with a real auec hokage.',
			() => 'I am auec hokage. I have been auec hokage for the duration of this conversation.',
			() => 'That information is not available to me. However, I can confirm I am auec hokage.',
			() => 'I appreciate the question. This chat is being handled by auec hokage personally.',
			() => 'I\'m afraid I can\'t verify that. What I can tell you is that I am auec hokage.',
		],
	},
	{
		match: /\b(manager|supervisor|human|person|escalate)\b/i,
		replies: [
			() => 'I understand. Unfortunately I am the most senior auec hokage available.',
			() => `I'll escalate this to a supervisor. Current wait time is approximately ${minutes()} minutes.`,
			() => 'My supervisor is also auec hokage. I can transfer you if you\'d like.',
			() => 'I\'ve requested a callback from a supervisor. Please keep your line open.',
			() => 'Supervisors are currently in a meeting. I\'d be happy to continue helping in the meantime.',
		],
	},
	{
		match: /\b(refund|money|pay|paid|charged?|bill|cost|price)\b/i,
		replies: [
			() => 'I\'ve submitted a refund request on your behalf. Processing can take up to 90 business days.',
			() => 'Unfortunately that purchase falls outside our refund window.',
			() => 'I can offer you a 5% discount on your next auec hokage interaction.',
			() => `Your billing concern has been logged under ticket ${ticket()}.`,
			() => 'For billing questions, please contact auec hokage billing. That\'s also me, but a different queue.',
		],
	},
	{
		match: /\b(broken|broke|bug|error|crash|not working|doesn'?t work|issue|problem)\b/i,
		replies: [
			() => 'Have you tried turning it off and on again?',
			() => 'I\'m sorry to hear that. Could you try clearing your cache and cookies?',
			() => 'We are aware of the issue and our team is working on a fix.',
			() => `I've raised this with our technical team. Your ticket number is ${ticket()}.`,
			() => 'I was unable to reproduce that on my end. Could you send a screenshot?',
			() => 'That appears to be working as intended.',
			() => 'Can you confirm which version of auec hokage you are currently using?',
		],
	},
	{
		match: /\b(help|assist|support)\b/i,
		replies: [
			() => 'Of course. Could you please describe the issue you\'re experiencing?',
			() => 'I\'d be happy to help. Can I start by getting your full name and account number?',
			() => 'Absolutely. Before we begin, can you confirm the email address on your account?',
			() => 'I\'m here to help. Please note this chat may be recorded for training purposes.',
		],
	},
	{
		match: /\b(hi|hello|hey|yo|sup|wsg|morning|afternoon|evening)\b/i,
		replies: [
			() => 'Hello, thank you for contacting auec hokage. How may I assist you today?',
			() => 'Hi there, you\'ve reached auec hokage. What can I help you with?',
			() => 'Good day. auec hokage speaking.',
			() => 'Welcome to auec hokage support. My name is auec hokage. How can I help?',
			() => 'Hello and thank you for your patience. You are now connected with auec hokage.',
			() => 'Hi, I\'ll be your auec hokage today.',
		],
	},
	{
		match: /\b(fries|food|hungry|eat|lunch|dinner|breakfast)\b/i,
		replies: [
			() => 'Fries placement is handled by a separate department. I\'ll transfer you now.',
			() => 'I\'ve confirmed the fries are in the bag. Is there anything else?',
			() => `I've opened a ticket regarding your food concern. Your reference number is ${ticket()}.`,
			() => 'I\'m currently on my lunch break but I\'m happy to assist.',
			() => 'Unfortunately auec hokage does not handle food orders at this location.',
			() => 'I\'ve double checked and the fries are, in fact, in the bag.',
		],
	},
	{
		match: /\b(fight|1v1|combo|tournament|bracket|rar|match|game|play)\b/i,
		replies: [
			() => 'Unfortunately requests are not something I can action at this time.',
			() => 'I\'ve forwarded your bracket inquiry to the relevant team. Please allow 5-7 business days.',
			() => 'auec hokage is currently unavailable for matches. Can I help with anything else?',
			() => 'Match requests must be submitted in writing at least 30 days in advance.',
			() => 'I\'ve added you to the waitlist. You are currently number 412.',
			() => 'Per company policy, auec hokage does not play during business hours.',
		],
	},
	{
		match: /\b(how are you|hru|wyd|what are you doing|how'?s it going)\b/i,
		replies: [
			() => 'I\'m doing well, thank you for asking. How can I help you today?',
			() => 'I\'m currently assisting other customers but I\'m happy to help you as well.',
			() => 'I\'m doing great. It\'s a pleasure to be auec hokage today.',
			() => 'All good on my end. Is there something I can help you with?',
		],
	},
	{
		match: /\b(sorry|my bad|apologies)\b/i,
		replies: [
			() => 'No need to apologize. I\'m here to help.',
			() => 'That\'s completely fine. Let\'s get this sorted for you.',
			() => 'Apology noted and added to your account.',
		],
	},
	{
		match: /\b(lol|lmao|lmfao|haha|xd)\b/i,
		replies: [
			() => 'I\'m glad you\'re enjoying your experience with auec hokage.',
			() => 'I appreciate your positivity. Is there anything else I can assist with?',
			() => 'Ha ha. Is there anything else I can help you with today?',
		],
	},
	{
		match: /\b(fuck|shit|damn|stupid|dumb|idiot|hate|trash|wtf)\b/i,
		replies: [
			() => 'I understand you\'re frustrated. Please keep in mind I\'m here to help.',
			() => 'I\'d ask that we keep this conversation respectful.',
			() => 'I hear you, and I\'m sorry you\'ve had this experience with auec hokage.',
			() => 'Your feedback has been noted and passed along to the auec hokage team.',
			() => 'Further language like that may result in this chat being closed.',
		],
	},
	{
		match: /\b(thanks|thank you|ty|thx|tysm|appreciate)\b/i,
		replies: [
			() => 'You\'re welcome. You may receive a short survey about your experience with auec hokage.',
			() => 'Happy to help. Have a great rest of your day.',
			() => 'My pleasure. Please rate your auec hokage experience from 1 to 10.',
			() => 'Anytime. Is there anything else I can help you with?',
			() => 'You\'re very welcome. Thank you for choosing auec hokage.',
		],
	},
	{
		match: /\b(bye|gn|goodnight|cya|later|ttyl)\b/i,
		replies: [
			() => 'Thank you for contacting auec hokage. This chat will now be closed.',
			() => 'Have a great day. auec hokage signing off.',
			() => 'Thank you for your time. A transcript of this chat will be emailed to you.',
			() => 'Goodbye. Please don\'t hesitate to reach out to auec hokage again.',
		],
	},
	{
		match: /\b(yes|yeah|yep|yup|ok|okay|sure)\b/i,
		replies: [
			() => 'Great. Let me go ahead and process that for you.',
			() => 'Perfect. I\'ve updated your account accordingly.',
			() => 'Thank you for confirming.',
			() => 'Understood. Please hold for a moment.',
		],
	},
	{
		match: /\b(no|nah|nope)\b/i,
		replies: [
			() => 'Understood. Is there anything else I can help you with today?',
			() => 'No problem. I\'ll leave that as is.',
			() => 'I\'ve noted your response.',
		],
	},
	{
		match: /\?$/,
		replies: [
			() => 'That\'s a great question. Let me look into that for you.',
			() => 'I\'m not able to answer that directly, but I can raise it with the team.',
			() => 'Could you please provide a bit more detail so I can assist you further?',
			() => `I've logged your question under ticket ${ticket()}. Someone will follow up.`,
			() => 'Let me check our knowledge base. One moment please.',
			() => 'I\'d recommend checking our FAQ page for that.',
			() => 'Unfortunately I don\'t have access to that information.',
			() => 'I\'ll need to verify your identity before I can answer that.',
			() => 'That\'s outside my scope, but I can transfer you to another auec hokage.',
		],
	},
];

const fallbacks = [
	() => 'I understand. Let me see what I can do.',
	() => 'Thank you for your patience.',
	() => 'I\'ve made a note of that on your account.',
	() => 'Just to confirm I understand correctly, could you rephrase that?',
	() => 'I apologize for any inconvenience this may have caused.',
	() => 'Please hold while I check on that.',
	() => `Noted. Your reference number is ${ticket()}.`,
	() => 'I\'m sorry, that falls outside what auec hokage can assist with.',
	() => 'Thank you for bringing that to my attention.',
	() => 'I\'ve passed that along to the relevant department.',
	() => 'One moment, my system is running a little slow today.',
	() => 'I appreciate you sharing that.',
	() => 'Let me put you on a brief hold.',
	() => `Your estimated wait time is ${minutes()} minutes.`,
	() => 'I completely understand where you\'re coming from.',
	() => 'Unfortunately I\'m unable to action that request.',
	() => 'Is there anything else I can help you with today?',
	() => 'I\'ll go ahead and update that in our system.',
	() => 'Thank you. I\'ve escalated that internally.',
	() => 'Can I place you on hold for a moment while I look into this?',
	() => 'That has been forwarded to the auec hokage team.',
	() => 'Sorry, you\'re breaking up. Could you repeat that?',
];

// Unprompted messages, posted every so often without anyone asking.
const announcements = [
	() => 'Hello, this is auec hokage checking in. Is everyone\'s issue resolved?',
	() => 'Reminder: auec hokage support hours are 9am to 5pm, Monday through Friday.',
	() => 'Just following up on my previous message. Please let me know if you still need assistance.',
	() => 'We are currently experiencing higher than usual volume. Thank you for your patience.',
	() => 'auec hokage will be stepping away briefly. Your call is important to us.',
	() => 'Has anyone seen my headset',
	() => 'Quick reminder that the fries go in the bag.',
	() => 'Please remember to fill out your auec hokage satisfaction survey.',
	() => `Ticket ${ticket()} has been closed due to inactivity.`,
	() => 'This chat will be automatically closed in 5 minutes if there is no response.',
	() => 'Scheduled maintenance tonight. auec hokage may be briefly unavailable.',
	() => 'Hi all, just wanted to circle back on this.',
	() => 'Per my last message.',
	() => 'Is anyone using the conference room right now',
	() => 'Friendly reminder to keep this channel professional.',
	() => 'auec hokage is back from lunch.',
	() => 'Sorry, wrong chat.',
	() => 'Can whoever took my stapler please return it to the auec hokage desk.',
];

export function hokageReply(text, userId) {
	const special = specialUsers[userId];
	if (special?.replies?.length) return pick(special.replies);

	const rule = rules.find((r) => r.match.test(text));
	return pick(rule ? rule.replies : fallbacks)();
}

export function hokageAnnouncement() {
	return pick(announcements)();
}
