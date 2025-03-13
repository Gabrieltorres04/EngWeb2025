const http = require('http');
const axios = require('axios');
const { genMainPage, genAlunosPage, genCursosPage, genInstrumentosPage, genAlunoPage, genCursoPage} = require('./mypages.js');
const { readFile } = require('fs');

http.createServer(function (req, res) {
    const date = new Date().toISOString().substring(0, 16);
    console.log(req.method + " " + req.url + " " + date);

    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.write(genMainPage(date));
        res.end();
    }
    else if (req.url == '/alunos') {
        axios.get('http://localhost:3000/alunos')
            .then(function (resp) {
                var alunos = resp.data;
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.write(genAlunosPage(alunos, date));
                res.end();
            })
            .catch(erro => {
                console.log("Erro: " + erro);
                res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
                res.end();
            });
    }
    else if(req.url.match(/\/aluno\/[A-Za-z0-9%]+$/)){
        var id = req.url.split('/')[2];
        axios.get(`http://localhost:3000/alunos/${id}`)
            .then(function(resp) {
                var aluno = resp.data;
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.write(genAlunoPage(aluno, date));
                res.end();
            })
            .catch(erro => {
                console.log("Erro: " + erro);
                res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
                res.end();
            });
    }
    else if (req.url == '/cursos') {
        axios.get('http://localhost:3000/cursos')
            .then(function (resp) {
                var cursos = resp.data;
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.write(genCursosPage(cursos, date))
                res.end();
            })
            .catch(erro => {
                console.log("Erro: " + erro);
                res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
                res.end();
            });
    }
    else if(req.url.match(/\/curso\/[A-Za-z0-9%]+$/)){
        var nome = decodeURIComponent(req.url.split('/')[2]);
        axios.get(`http://localhost:3000/alunos?curso=${nome}`)
            .then(function(resp){
                var alunos = resp.data;
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.write(genCursoPage(nome, alunos, date));
                res.end();
            })
            .catch(erro => {
                console.log("Erro: " + erro);
                res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
                res.end();
            });
    }
    else if (req.url == '/instrumentos') {
        axios.get('http://localhost:3000/instrumentos')
            .then(function (resp) {
                var instrumentos = resp.data
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                res.write(genInstrumentosPage(instrumentos, date))
                res.end();
            })
            .catch(erro => {
                console.log("Erro: " + erro);
                res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
                res.end();
            });
    }
    else if(req.url.match(/w3\.css$/)){
        readFile("w3.css", function(erro, dados){
            if(erro){
                res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na leitura do ficheiro: ' + erro + '</p>')
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/css'})
                res.end(dados)
            }
        })
    }
}).listen(1234);