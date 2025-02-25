import { createServer } from 'http'
import axios from 'axios';
import { genMainPage, genRepPage, genIntervPage, genMarcasPage } from './mypages.js'
import { readFile } from 'fs'

createServer(function (req, res){
    var date = new Date().toISOString().substring(0, 16)
    cosnole.log(req.method + " " + req.url + " " + d)

    if(req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.write(genMainPage(d))
        res.end()
    }
    else if(req.url == '/alunos'){
        axios.get('http://localhost:3000/alunos')
            .then(function(resp) {
                var alunos = resp.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(genAlunosPage(d, alunos))
                res.end()

            })
    }
    else if(req.url == '/cursos'){
        axios.get('http://localhost:3000/cursos')
            .then(function(resp) {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                
                res.end()

            })
    }
    else if(req.url == '/instrumentos'){
        axios.get('http://localhost:3000/alunos')
            .then(function(resp) {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                
                res.end()

            })
    }
}) 