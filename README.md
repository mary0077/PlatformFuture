# API de Gestão Escolar

Este projeto é uma API para gerenciar alunos, funcionários e turmas de uma escola. A aplicação é desenvolvida em **Node.js** com o framework **Express**, utilizando **Sequelize** para interagir com o banco de dados PostgreSQL e autenticação JWT para proteger rotas específicas. A documentação da API é gerada automaticamente com **Swagger**.

<img src="./public/img/future.png" alt="screenshot do projeto">

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Sequelize** (ORM)
- **PostgreSQL**
- **JWT (JSON Web Token)** para autenticação
- **Swagger** para documentação da API
- **Prisma** (opcional, como ORM adicional)

## Requisitos

- **Node.js** v14 ou superior
- **PostgreSQL** configurado e acessível
- **npm** para gerenciamento de pacotes

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/mary0077/escola
cd escola
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```bash
DATABASE_URL=postgres://seu_usuario:senha@localhost:5432/sua_base_de_dados
JWT_SECRET=sua_chave_secreta
```

4. Para aplicar migrações no BD usando o prisma, execute

```bash
npx prisma migrate dev
```

5. Instale as dependências do Swagger:

```bash
npm install swagger-jsdoc swagger-ui-express
```

## Configuração

Para iniciar a aplicação, execute:

```bash
node app.js
```
## Documentação

Para um passo a passo simplificado e direto sobre a configuração e utilização da API, consulte a [documentação da API de Gestão Escolar](https://drive.google.com/).


- A documentação da API via Swagger estará em: `http://localhost:3000/api-docs`.


## Estrutura de Pastas

A estrutura básica do projeto é a seguinte:

```
/api-gestao-escolar
│
├── /config              # Configurações de banco de dados
│   └── database.js      # Configuração do Sequelize
│
├── /controllers         # Lógica dos controladores
│   ├── alunoController.js
│   ├── funcionarioController.js
│   └── turmaController.js
│
├── /models              # Definições dos modelos Sequelize
│   ├── aluno.js
│   ├── funcionario.js
│   └── turma.js
│
├── /routes              # Definições das rotas
│   ├── alunos.js
│   ├── funcionarios.js
│   └── turmas.js
│
├── /services            # Serviços auxiliares (ex. autenticação)
│   └── authService.js
│
├── /swagger             # Configuração do Swagger para documentação
│   └── swagger.js
│
├── app.js               # Arquivo principal da aplicação
├── .env                 # Variáveis de ambiente
├── package.json         # Gerenciamento de dependências e scripts
└── README.md            # Documentação do projeto
```

## 💻 Demonstração
Para visualizar uma prévia do projeto <a href="https://genapiescola.onrender.com/auth/login/" target="_blank"><b>clique aqui</b></a>

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para entrar em contato com a equipe 'future'.
