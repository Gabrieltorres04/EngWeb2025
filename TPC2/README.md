# EW 2025 - TPC 2

## Titulo: Escola de Música

Este projeto é uma aplicação web desenvolvida como parte do TPC2 da disciplina de Engenharia Web 2025. Consiste num servidor Node.js que disponibiliza uma interface para consulta de informações sobre alunos, cursos e instrumentos de uma escola de música.

## Funcionalidades

- **Página Principal** - Apresenta o menu principal da aplicação
- **Listagem de Alunos** - Exibe todos os alunos da escola
- **Detalhes de Aluno** - Mostra informações detalhadas de um aluno específico
- **Listagem de Cursos** - Apresenta todos os cursos disponíveis
- **Detalhes de Curso** - Exibe informações específicas sobre um curso e seus alunos
- **Listagem de Instrumentos** - Mostra todos os instrumentos disponíveis na escola

## Estrutura do Projeto

O projeto está organizado nos seguintes ficheiros:

- **escola-server.js**: Servidor HTTP que processa as requisições e respostas
- **mypages.js**: Contém funções para gerar o HTML das várias páginas
- **w3.css**: Folha de estilos para formatação das páginas


## Como Executar

1. **Instalar as dependências**:
   ```bash
   npm install
    ```
2. **Iniciar a API de dados**:
3. ```bash
   json-server --watch db.json
   ```
4. **Iniciar o servidor**:
   ```bash
   node escola-server.js
   ```
5. **Aceder à aplicação**:
   Abra o navegador e vá para `http://localhost:1234`.

## Endpoints disponíveis
- `/`: Página principal
- `/alunos`: Listagem de todos os alunos
- `/alunos/:id`: Detalhes de um aluno específico
- `/cursos`: Listagem de todos os cursos
- `/cursos/:id`: Detalhes de um curso específico
- `/instrumentos`: Listagem de todos os instrumentos