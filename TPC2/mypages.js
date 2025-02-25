export function genMainPage(data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Oficina Automóvel</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h1>Consultas</h1>
                </header>

                <div class="w3-container">
                    <ul class="w3-ul">
                        <li>
                            <a href="/reps">Lista de Reparações</a>
                        </li>
                        <li>
                            <a href="/interv">Lista de Tipos de Reparação</a>
                        </li>
                        <li>
                            <a href="/marcas">Lista de Marcas</a>
                        </li>
                    </ul>
                </div>
                
                <footer class="w3-container w3-purple">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

export function genRepPage(lreps,marca, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Oficina Automóvel</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h1>Lista de Reparações${marca==null? '':' - ' + marca}</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>IdRep</th>
                            <th>Nome</th>
                            <th>Data</th>
                            <th>#Intervenções</th>
                        </tr>`
    lreps.forEach(rep => {
        pagHTML += `
        <tr>
            <td></td>
            <td>${rep.nome}</td>
            <td>${rep.data}</td>
            <td>${rep.nr_intervencoes}</td>
        </tr>
        `
    });

    pagHTML += `  
                    </table>
                </div>
                
                <footer class="w3-container w3-purple">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

export function genIntervPage(lintervs, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Oficina Automóvel</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>Lista de Intervenções</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>IdRep</th>
                            <th>Nome</th>
                            <th>Data</th>
                            <th>#Intervenções</th>
                        </tr>`
    lintervs.forEach(interv => {
        pagHTML += `
        <tr>
            <td></td>
            <td>${interv.codigo}</td>
            <td>${interv.nome}</td>
            <td>${interv.descricao}</td>
        </tr>
        `
    });

    pagHTML += `  
                    </table>
                </div>
                
                <footer class="w3-container w3-blue">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

export function genMarcasPage(marcas, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Oficina Automóvel</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>Lista de Marcas</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Marca</th>
                            <th>Modelo</th>
                        </tr>`
    marcas.forEach(marca => {
        marca.modelo.forEach(modelo => {
        pagHTML += `
        <tr>
            <td><a href='/marca/${marca.marca}'>${marca.marca}</a></td>
            <td>${modelo}</td>
        </tr>
       `
        });
    });

    pagHTML += `  
                    </table>
                </div>
                
                <footer class="w3-container w3-blue">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}