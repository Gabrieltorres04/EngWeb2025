# EW 2025 - TPC 1
## Titulo: A Oficina
Construir um serviço em nodejs, que consuma a API de dados servida pelo json-server da oficina de reparações e responda com as páginas web do site.

### Resumo
Neste projeto foi desenvolvido um serviço em Node.js que:

- **Cria um servidor HTTP** utilizando o módulo `http`.  
- **Consume uma API** fornecida pelo `json-server` que disponibiliza os dados da oficina de reparações, através do módulo `axios`.
- **Trata diferentes rotas HTTP GET:**
  - **/reparacoes:**  
    Solicita a lista de reparações à API e gera dinamicamente uma página HTML com uma tabela contendo os detalhes de cada reparação (data, NIF, nome, marca, modelo e número de intervenções).
  - **/marcas:**  
    Solicita os dados de reparações, extrai as marcas únicas e gera uma página HTML listando-as.
- **Garante respostas apropriadas:**  
  Para URLs não tratadas, a aplicação retorna um código 404 ou 405 conforme o caso.
- **Trata erros:**  
  Caso haja problemas na obtenção dos dados da API, o servidor responde com uma mensagem de erro e o código HTTP 500.
