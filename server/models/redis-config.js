const redis = require('redis').createClient(process.env.REDIS_URL);

module.exports = redis;
