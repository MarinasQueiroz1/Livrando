const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const livros = Array(20).fill({
    titulo: "Título de algum livro",
    preco: "R$ 000,00",
    imagem: "/images/livro.png"
  });

  res.render('index', {
    termoBusca: "pesquisa",
    livros
  });
});

module.exports = router;