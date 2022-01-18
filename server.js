'use strict';
const express = require('express');
const config = require('./config');
const fbeamer = require('./fbeamer');
const f = new fbeamer(config.FB);
const server = express();
const PORT = process.env.PORT || 3000;
server.get('/', (req, res) => f.registerHook(req, res));
server.listen(PORT, () => console.log('The bot server is running on port ${PORT}'));
