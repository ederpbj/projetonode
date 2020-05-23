const app = require('./app');
// Conectar ao mongo
const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});

// Conexão ao banco de dados
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });
// Falar para mongoose usar ES6
mongoose.Promise = global.Promise;
// Log de erros
mongoose.connection.on('error', (error) => {
  console.error("ERROR: "+error.message);
})

app.set('port', process.env.PORT || 7777);

// rodar servidor
const server = app.listen(app.get('port'), () => {
  console.log("Servidor rodando na porta: "+server.address().port);
});