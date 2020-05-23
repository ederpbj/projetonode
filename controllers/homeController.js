exports.index = (req, res) => {
    // renderizar página, manda parametros para views
    let obj = {
      'pageTitle': 'Titulo de Teste', 
    } 
    res.render('home', obj);
  }