const express = require('express')
const route = express.Router();


require(`../app/controllers/usersController.js`)(route);
//require(`./../app/controllers/produtosController`)(route);
//require(`./../app/controllers/devsController`)(route);

module.exports = route;

