require('dotenv').config();
const Stats  = require('discord-live-stats');
const { ClusterClient, getInfo } = require('discord-hybrid-sharding');
const {
    Discord,
    GatewayIntentBits,
    Client,
  } = require("discord.js");

  const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
    shards: getInfo().SHARD_LIST,
    shardCount: getInfo().TOTAL_SHARDS,
});

const Poster = new Stats.Client(client, {
    stats_uri: 'https://sharding-test.mikandev.tech/',
    authorizationkey: "password",
})

client.cluster = new ClusterClient(client);
client.login(process.env.TOKEN);