export function genMainPage(data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
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
                            <a href="/alunos">Lista de alunos</a>
                        </li>
                        <li>
                            <a href="/cursos">Lista de Cursos</a>
                        </li>
                        <li>
                            <a href="/instrumentos">Lista de instrumentos</a>
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

export function genAlunosPage(alunos, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Escola de Música</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-blue">
                    <h1>Lista de Alunos</h1>
                </header>
                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Nome</th>
                            <th>DataNasc</th>
                            <th>Curso</th>
                            <th>AnoCurso</th>
                            <th>Instrumento</th>

                        </tr>`
    alunos.forEach(aluno => {
        pagHTML += `
        <tr>
            <td><a href='/aluno/${aluno.id}'>${aluno.nome}</a></td>
            <td>${aluno.dataNasc}</td>
            <td>${aluno.curso}</td>
            <td>${aluno.anoCurso}</td>
            <td>${aluno.instrumento}</td>
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

export function genCursosPage(cursos, data){
    let pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Lista de Cursos</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4 w3-margin">
                <header class="w3-container w3-blue">
                    <h1>Lista de Cursos</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Nome do Curso</th>
                            <th>Duração</th>
                        </tr>`
    cursos.forEach(curso => {
        pagHTML += `
        <tr>
            <td><a href='/curso/${curso.id}'>${curso.designacao}</a></td>
            <td>${curso.duracao}</td>
        </tr>`
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

export function genInstrumentosPage(instrumentos, data){
    let pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Lista de Instrumentos</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4 w3-margin">
                <header class="w3-container w3-green">
                    <h1>Lista de Instrumentos</h1>
                </header>

                <div class="w3-container">
                    <table class="w3-table-all">
                        <tr>
                            <th>Nome do Instrumento</th>
                        </tr>`
    instrumentos.forEach(instrumento => {
        pagHTML += `
        <tr>
            <td><a href='/instrumento/${instrumento.id}'>${instrumento["#text"]}</a></td>
        </tr>`
    });

    pagHTML += `  
                    </table>
                </div>
                
                <footer class="w3-container w3-purple">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>`
    return pagHTML
}

export function genAlunoPage(aluno, data){
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Aluno ${aluno.nome}</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4 w3-margin">
                <header class="w3-container w3-purple">
                    <h1>${aluno.nome}</h1>
                </header>

                <div class="w3-container">
                    <p><b>Indetificador:</b> ${aluno.id}</p> 
                    <p><b>Data de Nascimento:</b> ${aluno.dataNasc}</p> 
                    <p><b>Curso:</b> ${aluno.curso}</p>
                    <p><b>Ano do curso:</b> ${aluno.anoCurso}</p>
                    <p><b>Instrumento:</b> ${aluno.instrumento}</p>
                </div>
                
                <footer class="w3-container w3-purple">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>`
}


export function genCursoPage(nome, alunos, data){
    let pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Curso: ${nome}</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4 w3-margin">
                <header class="w3-container w3-purple">
                    <h1>Curso: ${nome}</h1>
                </header>

                <div class="w3-container">
                    <h2>Alunos Inscritos</h2>
                    <ul>`
    alunos.forEach(aluno => {
        pagHTML += `
        <li><a href='/aluno/${aluno.id}'>${aluno.nome}</a></li>`;
    })
    pagHTML += `
                    </ul>
                </div>
                
                <footer class="w3-container w3-purple">
                    <h5>Generated in EngWeb2025 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>`;
    return pagHTML;
}