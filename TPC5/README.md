# EW 2025 - TPC 5

## Título: Sistema de Gestão de Alunos

Este sistema implementa uma aplicação web completa, separando o backend (API) do frontend. A aplicação permite gerir informações de alunos, incluindo seus dados pessoais, controlo de TPCs realizados e notas obtidas nas avaliações.

## Funcionalidades

- **Listar Todos os Alunos**: Visualização de todos os alunos com suas informações básicas em formato de tabela
- **Ver Detalhes do Aluno**: Acesso a informações detalhadas sobre um aluno específico
- **Adicionar Novos Alunos**: Registrar novos alunos com suas informações completas
- **Editar Registos de Alunos**: Modificar informações existentes, incluindo estado dos TPCs e notas
- **Eliminar Alunos**: Remover registros de alunos do sistema
- **Toggle TPC**: Alternar o estado de conclusão dos TPCs diretamente da lista de alunos

## Estrutura do Projeto

O projeto está dividido em dois componentes principais:

### apiAlunos (Backend)

- **app.js**: Configuração principal da API Express e conexão com MongoDB
- **controllers/alunos.js**: Controladores para operações CRUD com alunos
- **models/aluno.js**: Modelo de dados Mongoose para alunos
- **routes/alunos.js**: Rotas da API para as operações com alunos

### frontAlunos (Frontend)

- **app.js**: Aplicação Express para o frontend
- **routes/alunos.js**: Controlador para renderização das views e comunicação com a API
- **views/**: Templates Pug para as diferentes páginas
  - **alunos.pug**: Listagem de todos os alunos
  - **alunoDetails.pug**: Detalhes de um aluno específico
  - **editAlunoForm.pug**: Formulário para edição de alunos
  - **newAlunoForm.pug**: Formulário para criação de novos alunos

## Como Executar

1. **Instalar as dependências** em ambos os diretórios:

   ```bash
   cd apiAlunos && npm install
   cd ../frontAlunos && npm install
   ```

2. **Iniciar o MongoDB**:

   ```bash
   docker start mongoEW
   ```

3. **Iniciar a API backend**:

   ```bash
   cd apiAlunos && npm start
   ```

4. **Iniciar o frontend**:

   ```bash
   cd frontAlunos && npm start
   ```

5. **Acessar a aplicação**:
   Abra o navegador e vá para `http://localhost:7777/alunos`.

## Endpoints da API

### Backend (porta 3000)

- **GET /alunos**: Retorna JSON com todos os alunos
- **GET /alunos/:id**: Retorna detalhes de um aluno específico
- **POST /alunos**: Cria um novo aluno
- **PUT /alunos/:id**: Atualiza dados de um aluno
- **DELETE /alunos/:id**: Remove um aluno
- **PUT /alunos/:id/tpc/:idTpc**: Inverte o estado de um TPC específico

### Frontend (porta 7777)

- **GET /alunos**: Lista todos os alunos
- **GET /alunos/:id**: Mostra detalhes de um aluno
- **GET /alunos/registo/novo**: Exibe formulário de novo aluno
- **GET /alunos/edit/:id**: Exibe formulário de edição
- **POST /alunos/registo**: Processa criação de aluno
- **POST /alunos/edit/:id**: Processa edição de aluno
- **GET /alunos/delete/:id**: Remove um aluno
- **GET /alunos/tpc/:id/:idTpc**: Alterna estado de um TPC
