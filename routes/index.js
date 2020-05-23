const express = require('express');


// Rotas
const router = express.Router();

// F2 Rota raiz, Generica
router.get('/', (req, res) => {
  // renderizar página, manda parametros para views
  let obj = {
    'nome': req.query.nome,
    'idade': 38,
    mostrar: true,
    ingredientes: [
      {nome: 'Arroz', qtd: '20g'},
      {nome: 'Macarrão', qtd: '100g'},
    ]
  }
  res.render('home', obj);
});

//F1 Rota raiz, Generica
/* router.get('/', (req, res) => {
  // renderizar página, manda parametros para views
  res.render('home', {
    'nome': 'Éder',
    'idade': 38
  });
});
 */
module.exports = router;