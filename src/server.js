const express = require('express');

const db = require('./models'); //Instanciando o ORM

const app = express()
const port = 3000

const default_middleware = require('./app/middlewares/default');

app.use(express.json())
app.use(default_middleware) //Aplicando o middleware pra todas as rotas (opcional)

db.sequelize.sync()
app.use('/api',require('./routes/index')); //Percorrendo o ficheiro das rotas

app.listen(port, () => console.log(`API rodando na porta ${port}!`))