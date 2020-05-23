/* const express = require('express');

// Rotas
const router = express.Router();

// Rota raiz, Generica
router.get('/', (req, res) => {
  // Acessar parametros enviados via get
  // http://localhost:7777/?nome=eder&idade=90...
  res.json(req.query);
  // Não pode usar o json com send juntos
  // res.send('Olá, '+nome+'. Você tem: '+idade+ ' anos.')

  // GET: req.query
  // POST: req.body
  // PARAMETROS DA URL: req.params

  // SEND
  // JSON
});

// Rota raiz nome e sobrenome
router.get('/', (req, res) => {
  // http://localhost:7777/?nome=Eder&sobrenome=Pires
  let nome = req.query.nome;
  let sobrenome = req.query.sobrenome;
  // let idade = req.query.idade;

  res.json({
    nomeCompleto: nome+' '+sobrenome
  });
  // Não pode usar o json com send juntos
  res.send('Olá, '+nome+'. Você tem: '+idade+ ' anos.')
});

// Rota sobre
router.get('/sobre', (req, res) => {
  res.send('Página SOBRE')
});

// Rota post ID
// http://localhost:7777/posts/1
// ID do post: 1
router.get('/posts/:id', (req, res) => {
  let id = req.params.id;
  res.send('ID do post: '+id);
})

// Rota slug
// http://localhost:7777/posts/1
// ID do post: 1
router.get('/posts/:slug', (req, res) => {
  // router.get('/posts/:slug', (req, res) => {
    let slug = req.params.slug;
    // Titulo: seja bem vindo
    // slug: seja-bem-vindo
  res.send('Slug do post: '+slug);
})

module.exports = router; */