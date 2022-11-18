const { Client } = require("pg");
require("dotenv").config();
// const {DB_URI} = require('./config')

const client = new Client(process.env.DATABASE_URL);

client.connect();


module.exports = client;