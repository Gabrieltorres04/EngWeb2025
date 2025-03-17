var http = require('http')
var axios = require('axios')
const { parse } = require('querystring');

var templates = require('./templates') 
var static = require('./static.js')           

function collectRequestBodyData(request, callback) {
    if(request.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = '';
        request.on('data', chunk => {
            body += chunk.toString();
        });
        request.on('end', () => {
            callback(parse(body));
        });
    }
    else {
        callback(null);
    }
}


var alunosServer = http.createServer((req, res) => {
    var d = new Date().toISOString().substring(0, 16)
    console.log(req.method + " " + req.url + " " + d)

    if(static.staticResource(req)){
        static.serveStaticResource(req, res)
    }
    else{
        switch(req.method){
            case "GET": 
                // GET /alunos --------------------------------------------------------------------
                if(req.url == '/alunos' || req.url == '/' ){
                    axios.get('http://localhost:3000/alunos')
                        .then(resp => {
                            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                            res.write(templates.studentsListPage(resp.data, d))
                            res.end()
                        })
                        .catch(erro => {
                            console.log('ERRO: ' + erro)
                            res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                            res.end()
                        })
                    
                }
                // GET /alunos/:id --------------------------------------------------------------------
                else if(/\/alunos\/(A|PG)[0-9]+$/.test(req.url)){
                    id = req.url.split('/')[2]
                    axios.get('http://localhost:3000/alunos/' + id)
                        .then(resp => {
                            aluno = resp.data
                            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                            res.write(templates.studentPage(aluno, d))
                            res.end()
                        })
                        .catch(erro => {
                            console.log('ERRO: ' + erro)
                            res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                            res.end()
                        })
                }
                // GET /alunos/registo --------------------------------------------------------------------
                else if(req.url == '/alunos/registo'){
                    //TODO
                    res.writeHead(405, {'Content-Type': 'text/html; charset=utf-8'})
                    res.write(templates.studentFormPage())
                    res.end()
                }
                // GET /alunos/edit/:id --------------------------------------------------------------------
                else if(/\/alunos\/edit\/(A|PG)[0-9]+$/.test(req.url)) {
                    id = req.url.split('/')[3]
                    axios.get('http://localhost:3000/alunos/' + id)
                        .then(resp => {
                            aluno = resp.data
                            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                            res.write(templates.studentFormEditPage(aluno, d))
                            res.end()

                        })
                        .catch(erro => {
                            console.log('ERRO: ' + erro)
                            res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                            res.end()
                        })
                    
                }
                // GET /alunos/delete/:id --------------------------------------------------------------------
                else if(/\/alunos\/delete\/(A|PG)[0-9]+$/.test(req.url)) {
                    id = req.url.split('/')[3]
                    axios.delete('http://localhost:3000/alunos/' + id)
                        .then(resp => {
                            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                            res.write(`<p>  Registo Eliminado: ${JSON.stringify(resp.data) }  </p>`)
                            res.end()
                        })
                        .catch(erro => {
                            console.log('ERRO: ' + erro)
                            res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                            res.end()
                        })

                }

                // GET ? -> Lancar um erro
                else{
                    res.writeHead(405, {'Content-Type': 'text/html; charset=utf-8'})
                    res.end()
                }
                break
            case "POST":
                // POST /alunos/registo --------------------------------------------------------------------
                if(req.url == '/alunos/registo'){
                    collectRequestBodyData(req, result => {
                        if(result) {
                            axios.post('http://localhost:3000/alunos', result)
                                .then(resp => {
                                    res.writeHead(201, {'Content-Type': 'text/html; charset=utf-8'})
                                    res.write(`<p>  Registo Inserido: ${JSON.stringify(resp.data) }  </p>`)
                                    res.end()
                                })
                                .catch(erro => {
                                    console.log('ERRO: ' + erro)
                                    res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                                    res.end()
                                })
                            
                        }
                        else { // em caso de nao ter resultado
                            console.log('NO BODY DATA')
                            res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                            res.end()
                        }
                    })
                }
                // POST /alunos/edit/:id --------------------------------------------------------------------
                else if(/\/alunos\/edit\/(A|PG)[0-9]+$/.test(req.url)) {
                    collectRequestBodyData(req, result => {
                            if(result) {
                                axios.put('http://localhost:3000/alunos/' + result.id,result)
                                    .then(resp => {
                                        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                                        res.write(`<p>  Registo Alterado: ${JSON.stringify(resp.data) }  </p>`)
                                        res.end()
                                    })
                                    .catch(erro => {
                                        console.log('ERRO: ' + erro)
                                        res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                                        res.end()
                                    })
                                
                            }
                            else { // em caso de nao ter resultado
                                console.log('NO BODY DATA')
                                res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
                                res.end()
                            }
                        })
                }
                
                // POST ? -> Lancar um erro
                else{
                    res.writeHead(405, {'Content-Type': 'text/html; charset=utf-8'})
                    res.end()
                }
            break
            
            
            
        default: 
            // Outros metodos nao sao suportados
            res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
            res.write("<p>Método não suportado: " + req.method  + "</p>")
            res.end()
            break
        }
    }
})

alunosServer.listen(7777, ()=>{
    console.log("Servidor à escuta na porta 7777...")
})



