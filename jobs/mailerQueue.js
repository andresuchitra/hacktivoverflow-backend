const Queue = require('bull');

const sendMailQueue = new Queue('sendMail', {
    redis: {
      host: process.env.REDIS_URL,
      port: process.env.REDIS_PORT
    }
});

module.exports = sendMailQueue