const express = require('express');
const mustache = require('mustache-express');

// Rotas
// rotas padrão do usuário
const router = require('./routes/index')

// Configurações
const app = express();
app.use('/', router);
// app.use('/sobre', router);

// acessar dados via post
app.use(express.json())

// Motor, parte visual
app.engine('mst', mustache());
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');

module.exports = app;