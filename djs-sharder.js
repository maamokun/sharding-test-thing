require ('dotenv').config();
const { ShardingManager } = require('discord.js');

const manager = new ShardingManager('./index.js', { token: process.env.TOKEN, totalShards: 40 });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();