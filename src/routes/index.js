const express = require('express')
const route = express.Router();
const fs = require('fs')
const path = require('path')

const controllersPath = path.join(__dirname,'../app/controllers');


//Basicamente, ele percorre e filtra tudo quanto é ficheiro .js na pasta controllers... tudo que precisas de fazer é "criares os controllers segundo o controller inicial" 
fs
.readdirSync(controllersPath)
.filter(file => {
    return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
})
.forEach(file => {
      require(path.join(controllersPath, file))(route);
});

module.exports = route;

