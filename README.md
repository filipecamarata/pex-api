# 📌 pex-api


### Descrição
Esta API foi desenvolvida para um sistema completo para gerenciamento de produtos em uma loja ou estabelecimento comercial. O sistema visa otimizar o controle de estoque, facilitar o cadastro e rastreamento de produtos, e fornecer ferramentas eficientes para consulta, atualização e organização de informações do inventário.

Com ela, é possível realizar:

 - ✅ Cadastro e atualização de produtos
 - ✅ Controle de estoque (entrada/saída)
 - ✅ Atualização de produto
 - ✅ Leitura de produto
 - ✅ Cadastro de usuário
 - ✅ Autenticação de usuário
 - ✅ Níveis de acesso
 

A API foi projetada para ser o backend da plataforma, garantindo rotas seguras e uma estrutura robusta para facilitar o gerenciamento completo das atividades diárias para o gerenciamento de produtos.

### 🚀 Tecnologias utilizadas

- Node.js/Expres
- Sequelize (MySql)
- JWT (para autenticação)
- Postman (para testes das rotas)


### 📄 Como rodar o projecto


#### ✅  Pré-requisitos
 - Node.js instalado
 - MySQL instalado e inicializado em sua maquina
 - Um editor de código de sua preferência instalado

#### ✅  Instalação do projecto

###### Clone o repositório

- $ git clone git@github.com:filipecamarata/pex-api.git

###### Acesse o directório do projecto com o comando
- $ cd pex-api

Em seguida digite o seguinte comando **npm init -y**

Instala as dependências do projecto com o comando **npm install**

Configure as variaveis de ambiente do projecto de acordo com a sua maquina

Apos todas essas configurações rode o comando **npm run dev**


### 🔗 Principais endpoints da API 


| Método  | Rota               | Descrição                     |
|---------|--------------------|-------------------------------|
| GET     | `/users`           | Retorna todos os usuários     |
| POST    | `/users`           | Cria um novo usuário          |
| Patch   | `/users/:id`       | Atualiza um usuário           |
| DELETE  | `/users/:id`       | Remove um usuário             |
|  GET    | `/products`        | Retorna todos os produtos     |
| POST    | `/products`        | Cria um novo produto          |
| Patch   | `/products/:id`    | Atualiza um produto           |
| DELETE  | `/products/:id`    | Remove um produto             |
 
 

### 📝  Licença
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
