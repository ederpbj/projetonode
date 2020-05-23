const express = require('express');
const mustache = require('mustache-express');
const helpers = require('./helpers');

// Rotas
// rotas padrão do usuário
const router = require('./routes/index')

// Configurações
const app = express();

// Acessar variáveis locais
app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.teste = "123";
  // pega as informações e manda para próxima página
  next();
})

// Definição das rotas 
app.use('/', router);
// app.use('/sobre', router);

// acessar dados via post
app.use(express.json())

// Motor, parte visual
app.engine('mst', mustache(__dirname+'/views/partials','.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');

module.exports = app;