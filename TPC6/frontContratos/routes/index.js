var express = require('express');
var router = express.Router();
var axios = require('axios');


const API_URL = 'http://localhost:16000' ;
/* List all contracts. */
router.get('/', function(req, res, next) {
  axios.get(API_URL)
    .then(response => {
      res.render('contratos', {lcontratos: response.data} )
    })
    .catch(error => {
      res.render('error', {error: error})
    })
});







/* Show contract details */
router.get('/:id', function(req, res, next) {
  axios.get(`${API_URL}/${req.params.id}`)
    .then(response => {
      res.render('contratoDetails', {contrato: response.data} )
    })
    .catch(error => {
      res.render('error', {error: error})
    })
});

module.exports = router;
