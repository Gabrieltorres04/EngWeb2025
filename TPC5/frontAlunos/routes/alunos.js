var express = require('express');
var router = express.Router();
var axios = require('axios')

const API_URL = 'http://localhost:3000/alunos';

// List all students
router.get('/', function(req, res, next) {
  axios.get(API_URL)
    .then(response => {
      res.render('alunos', {lalunos: response.data, title: 'Lista de Alunos'});
    })
    .catch(error => {
      res.render('error', {error: error});
    });
});

// Show student details
router.get('/:id', function(req, res, next) {
  axios.get(`${API_URL}/${req.params.id}`)
    .then(response => {
      res.render('alunoDetails', {aluno: response.data, title: 'Detalhes do Aluno'});
    })
    .catch(error => {
      res.render('error', {error: error});
    });
});

// Form to add a new student
router.get('/registo/novo', function(req, res, next) {
  res.render('newAlunoForm', {title: 'Novo Aluno'});
});

// Form to edit a student
router.get('/edit/:id', function(req, res, next) {
  axios.get(`${API_URL}/${req.params.id}`)
    .then(response => {
      res.render('editAlunoForm', {title: 'Editar Aluno', aluno: response.data});
    })
    .catch(error => {
      res.render('error', {error: error});
    });
});

// Save new student
router.post('/registo', function(req, res, next) {
  axios.post(API_URL, req.body)
    .then((resp) => {
      console.log(resp.data)
      res.redirect('/alunos');
    })
    .catch(error => {
      res.render('error', {error: error});
    });
});

// Update student
router.post('/edit/:id', function(req, res, next) {
  axios.put(`${API_URL}/${req.params.id}`, req.body)
    .then((resp) => {
      console.log(resp.data)
      res.redirect('/alunos');
    })
    .catch(error => {
      res.render('error', {error: error});
    });
});

// Delete student
router.get('/delete/:id', function(req, res, next) {
  axios.delete(`${API_URL}/${req.params.id}`)
    .then(() => {
      res.redirect('/alunos');
    })
    .catch(error => {
      res.render('error', {error: error});
    });
});

// Toggle TPC status
router.get('/tpc/:id/:idTpc', function(req, res, next) {
  axios.put(`${API_URL}/${req.params.id}/tpc/${req.params.idTpc}`)
    .then(() => {
      res.redirect('/alunos');
    })
    .catch(error => {
      res.render('error', {error: error});
    });
});




module.exports = router;
