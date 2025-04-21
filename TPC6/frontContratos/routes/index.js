var express = require('express');
var router = express.Router();
var axios = require('axios');


const API_URL = 'http://localhost:16000' ;
/* List all contracts. */
router.get('/', function(req, res, next) {
  axios.get(API_URL)
    .then(response => {
      res.render('contratosList', {lcontratos: response.data} )
    })
    .catch(error => {
      res.render('error', {error: error})
    })
});


/* GET contract details page */
router.get('/:id', function(req, res, next) {
  const contractId = req.params.id;
  axios.get(`${API_URL}/contratos/${contractId}`) // Assuming API endpoint is /contratos/:id
    .then(response => {
      res.render('contratoDetails', { title: `Contrato ${contractId}`, contrato: response.data });
    })
    .catch(error => {
      console.error(`Erro, ${contractId}:`, error);
      res.render('error', { message: `Erro ao obter detalhes do contrato ${contractId}.`, error: error });
    });
});

/* GET entity details page */
router.get('/entidades/:nipc', function(req, res, next) {
  const nipc = req.params.nipc;
  axios.get(`${API_URL}/contratos?entidade=${nipc}`)
    .then(response => {
      const contratos = Array.isArray(response.data) ? response.data : [];
      let totalPreco = 0;
      let entidadeNome = "Nome não encontrado";

      if (contratos.length > 0) {
        entidadeNome = contratos[0].entidade_comunicante;
        // Calculate total price
        totalPreco = contratos.reduce((sum, contrato) => {
          const preco = parseFloat(contrato.precoContratual) || 0;
          return sum + preco;
        }, 0);
      }

      res.render('entidadeDetails', {
        title: `Detalhes da Entidade ${nipc}`,
        nipc: nipc,
        nome: entidadeNome,
        lcontratos: contratos,
        total: totalPreco.toFixed(2) // Format to 2 decimal places
      });
    })
    .catch(error => {
      console.error(`Erro, entidade: ${nipc}:`, error);
      res.render('error', { message: `Erro ao obter contratos para a entidade ${nipc}.`, error: error });
    });
});




module.exports = router;
