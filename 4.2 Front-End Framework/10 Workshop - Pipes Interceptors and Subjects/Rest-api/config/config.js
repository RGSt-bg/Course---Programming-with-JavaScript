const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        dbURL: 'mongodb://localhost:27017/forum',
        origin: ['http://localhost:5555', 'http://localhost:21824']
    },
    production: {
        port: process.env.PORT || 5000,
        dbURL: process.env.DB_URL_CREDENTIALS,
        origin: []
    }
};

module.exports = config[env];
