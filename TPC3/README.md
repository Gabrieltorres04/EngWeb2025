# EW 2025 - TPC 3

## Titulo: Gestão de Alunos

O sistema utiliza um servidor Node.js que produz páginas web interativas com base em informações extraídas
de um ficheiro JSON. A aplicação permite aos utilizadores consultar, modificar e eliminar registos
académicos dos estudantes.

## Funcionalidades

- **Listar Todos os Alunos**: Visualização de todos os alunos com os seus detalhes básicos num formato de tabela
- **Ver Detalhes do Aluno**: Acesso a informações detalhadas sobre um aluno específico
- **Adicionar Novos Alunos**: Registar novos alunos com as suas informações e estado dos TPCs
- **Editar Registos de Alunos**: Modificar informações existentes dos alunos
- **Eliminar Alunos**: Remover registos de alunos do sistema

## Estrutura do Projeto
O projeto é composto pelos seguintes ficheiros:
- **alunos_server_skeleton.js**: Servidor HTTP que processa as requisições e respostas
- **templates.js**: Contém funções para gerar o HTML das várias páginas
- **static**: Pasta que contém os ficheiros estáticos (CSS, imagens, etc.)
- **alunos.json**: Ficheiro JSON que contém os dados dos alunos
- 

## Como Executar

1. **Instalar as dependências**:
   ```bash
   npm install
    ```
2. **Iniciar a API de dados**:
3. ```bash
   json-server --watch alunos.json
   ```
4. **Iniciar o servidor**:
   ```bash
   node alunos_server_skeleton.js
   ```
5. **Aceder à aplicação**:
   Abra o navegador e vá para `http://localhost:7777`.

## Endpoints da API

- **GET /alunos**: Devolve a lista de todos os alunos
- **GET /alunos/:id**: Devolve detalhes de um aluno específico
- **GET /alunos/registo**: Devolve o formulário para registar um novo aluno
- **GET /alunos/edit/:id**: Devolve o formulário para editar um aluno
- **GET /alunos/delete/:id**: Elimina um aluno e devolve confirmação
- **POST /alunos/registo**: Cria um novo registo de aluno
- **POST /alunos/edit/:id**: Atualiza um registo de aluno existente
