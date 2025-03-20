# EW 2025 - TPC 4

## Titulo: Gestão de Cinema

O sistema implementa um servidor web baseado em Express.js que produz páginas interativas com informações extraídas de uma API JSON. A aplicação permite aos utilizadores consultar, modificar e eliminar registos de filmes, bem como filtrar filmes por atores.

## Funcionalidades

- **Listar Todos os Filmes**: Visualização de todos os filmes com os seus detalhes num formato de tabela
- **Ver Filmes por Ator**: Filtrar e visualizar apenas os filmes em que um determinado ator participa
- **Editar Detalhes de Filmes**: Modificar informações existentes dos filmes, incluindo título, ano, elenco e géneros
- **Eliminar Filmes**: Remover registos de filmes do sistema

## Estrutura do Projeto
O projeto é composto pelos seguintes ficheiros:
- **app.js**: Aplicação principal Express que configura rotas, middleware e gestão de erros
- **routes/index.js**: Controlador para a página inicial
- **routes/filmes.js**: Controlador para as operações relacionadas com filmes
- **views/**: Pasta contendo os templates Pug para renderização das páginas
  - **filmes.pug**: Template para listar todos os filmes
  - **filmeEdit.pug**: Template para editar um filme
  - **filmesAtor.pug**: Template para listar filmes de um determinado ator
  - **index.pug**: Template para a página inicial
  - **layout.pug**: Template base para todas as páginas
  - **error.pug**: Template para exibir mensagens de erro
- **cinema.json**: Ficheiro JSON que contém os dados dos filmes
- **addEntryId.py**: Script Python para adicionar IDs aos registos de filmes

## Como Executar

1. **Instalar as dependências**:
   ```bash
   npm install
   ```

2. **Adicionar IDs aos filmes (se necessário)**:
   ```bash
   python addEntryId.py
   ```

3. **Iniciar a API de dados**:
   ```bash
   json-server --watch cinema.json 
   ```

4. **Iniciar o servidor**:
   ```bash
   npm start
   ```

5. **Aceder à aplicação**:
   Abra o navegador e vá para `http://localhost:2510`.

## Endpoints da API

- **GET /filmes**: Devolve a página com a lista de todos os filmes
- **GET /filmes/edit/:id**: Devolve o formulário para editar um filme específico
- **POST /filmes/edit/:id**: Atualiza os dados de um filme específico
- **GET /filmes/delete/:id**: Elimina um filme e redireciona para a página inicial
- **GET /filmes/ator/:nome**: Devolve a lista de filmes em que o ator especificado participa
