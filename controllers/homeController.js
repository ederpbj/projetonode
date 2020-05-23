// Middleware local
exports.userMiddleware = (req, res, next) => {
    let info = {name: 'Eder', id:123};

    // Adicionar na requisição
    req.userInfo = info;
  next();
  }

exports.index = (req, res) => {
    // renderizar página, manda parametros para views
    let obj = {
      pageTitle: 'Titulo de Teste', 
      userInfo: req.userInfo,
    } 
    res.render('home', obj);
  }