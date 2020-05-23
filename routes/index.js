const express = require('express');
const homeConntroller = require('../controllers/homeController');
const userConntroller = require('../controllers/userConntroller');

// Rotas
const router = express.Router();

// F2 Rota raiz, Generica
router.get('/', homeConntroller.index);

// Rota login
router.get('/users/login', userConntroller.login);
router.get('/users/register', userConntroller.register);

module.exports = router;