'use stric'

require('dotenv').config();
config={
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE: process.env.DATABASE,
    PORT: process.env.PORT || 3000
}
module.exports = config;