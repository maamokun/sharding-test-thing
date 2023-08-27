require('dotenv').config();
const { ClusterManager } = require('discord-hybrid-sharding');

const manager = new ClusterManager(`./index.js`, {
    totalShards: 50, 
    shardsPerClusters: 5,
    mode: 'worker',
    token: process.env.TOKEN,
});

manager.on('clusterCreate', cluster => console.log(`Launched Cluster ${cluster.id}`));
manager.spawn({ timeout: -1 });