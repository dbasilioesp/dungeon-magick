const winston = require('winston');

module.exports = {
  express: {
    port: 3003
  },
  database: {
    url: 'mongodb://localhost:27017/dungeon-magick'
  },
  logger: {
    transports: [
      new (winston.transports.Console)({ 'timestamp': true })
    ],
    level: 'debug'
  }
};
