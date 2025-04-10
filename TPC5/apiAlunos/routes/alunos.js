var express = require('express');
var router = express.Router();
var Aluno = require('../controllers/alunos')

/* GET alunos listing */
router.get('/', function(req, res, next) {
    Aluno.list()
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

/* GET aluno by id */
router.get('/:id', function(req, res, next) {
    Aluno.findById(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

/* POST alunos*/
router.post('/', function(req, res, next) {
    Aluno.insert(req.body)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

/* PUT aluno by id */
router.put('/:id', function(req, res, next) {
    for (let i = 1; i <= 8; i++) {
      if (!req.body[`tpc${i}`]) {
        req.body[`tpc${i}`] = "0";  // Set missing checkboxes to "0"
      }
    }
    Aluno.update(req.params.id, req.body)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

/* DELETE aluno by id */
router.delete('/:id', function(req, res, next) {
    Aluno.delete(req.params.id)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

/* PUT aluno by id */
router.put('/:id/tpc/:idTpc', function(req, res, next) {
    Aluno.inverteTpc(req.params.id, req.params.idTpc)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});


module.exports = router;
