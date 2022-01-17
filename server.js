'use strict';
const express = require('express');
const config = require('./config');
const server = express ();
const PORT = process.env.PORT || 3000;
server.get('/', (req , res) => f.registerHook(req,res));
server.listen(PORT , () => console.log('The bot server is running on port ${PORT}'));

console.log(config.FB)

const FBeamer = require('./fbeamer');
var f = new FBeamer(config.FB.pageAccessToken,config.FB.VerifyToken);
console.log(f);