const http = require('http');
const axios = require('axios');

http.createServer((req, res, err) => {
    console.log("METHOD: " + req.method);
    console.log("URL:" + req.url);
    
    switch (req.method) {
        case 'GET': {
            switch (req.url) {
                case "/reparacoes": {
                    axios.get("http://localhost:3000/reparacoes")
                    .then(result => {
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
                        res.write('<h1>Lista de Reparações</h1>');
                        res.write('<table border="1"><tr><th>Data</th><th>NIF</th><th>Nome</th><th>Marca</th><th>Modelo</th><th>Número de Intervenções</th></tr>');
                        result.data.forEach(reparacao => {
                            res.write(`<tr>
                                <td>${reparacao.data}</td>
                                <td>${reparacao.nif}</td>
                                <td>${reparacao.nome}</td>
                                <td>${reparacao.viatura.marca}</td>
                                <td>${reparacao.viatura.modelo}</td>
                                <td>${reparacao.nr_intervencoes}</td>
                            </tr>`);
                        });
                        res.write('</table>');
                        res.end();
                    })
                    .catch(err => {
                        res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'});
                        console.log(err);
                        res.end();
                    });
                    return;
                }
                case "/marcas": {
                    axios.get("http://localhost:3000/reparacoes")
                    .then(result => {
                        const marcas = new Set();
                        res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
                        res.write('<h1>Lista de Marcas</h1>');
                        res.write('<ul>');
                        result.data.forEach(reparacao => {
                            if (!marcas.has(reparacao.viatura.marca)) {
                                marcas.add(reparacao.viatura.marca);
                                res.write(`<li>${reparacao.viatura.marca}</li>`);
                            }
                        });
                        res.write('</ul>');
                        res.end();
                    })
                    .catch(err => {
                        res.writeHead(500, {'Content-Type': 'text/html;charset=utf-8'});
                        console.log(err);
                        res.end();
                    });
                    return;
                }
                default:
                    res.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'});
                    res.end();
                    return;
            }
        }
        default:
            res.statusCode = 405;
            res.end();
            return;
    }
}).listen(1234);

console.log('Servidor á escuta na porta 1234');