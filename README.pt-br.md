# Pede-se (Em Desenvolvimento)

Aplicativo auto-hospedado para fazer pedidos.

## Índice

- [Descrição](#Descrição)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar](#como-executar)
  - [API](#api)
  - [Admin](#admin)
  - [Mobile](#mobile)

## Descrição

**Pede-se** (de "**Pede-se** um sanduíche") é um aplicativo para fazer pedidos.

Este é um projeto pessoal, estou usando-o para aprender a criar um aplicativo completo com as tecnologias envolvidas (Express, React, React Native, MySQL, etc.)

O objetivo é a criação de um serviço que quaisquer estabelecimentos podem implementar em suas redes, ou nos servidores que desejarem, os quais seus clientes podem consumir usando o mesmo aplicativo.

## Estrutura do projeto

Todos os módulos abaixo estarão dentro da pasta [`packages`](./packages).

- [API](./packages/api) (Em progresso) - Comunicação com o banco de dados, recebimento de pedidos.
- [Admin](./packages/admin) (Não iniciado) - Aplicação WEB para gerenciamento do serviço.
- Mobile (Não iniciado) - Aplicação cliente.

## Executando o Projeto

Instale todas as dependências usando o [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) na raiz do projeto:

```sh
yarn
```

### API

Para executar a API localmente, entre na pasta do projeto:

```sh
cd ./packages/api
```

Crie e configure um arquivo `.env` assim como o exemplo no arquivo [.env.example](/packages/api/src/packages/api/.env.example):

```sh
#API Configuration
APP_port=3333

# MySQL server configuration
DB_username=usuario
DB_password=S3nh4F0rt3
DB_host=localhost
DB_port=3306
DB_database=pedese
```

Mude os valores após os sinais de igual para os que forem mais adequados no seu ambiente.

E então execute o script de inicialização:

```sh
yarn start
```

A API será aberta no host local na porta 3333.

### Admin

Entre na pasta do projeto:

```sh
cd ./packages/admin
```

E execute o script de inicialização do ambiente de desenvolvimento:

```sh
yarn dev
```

A aplicação web (que no momento é apenas um Hello World!) será compilada e hospedada para desenvolvimento no host local na porta 3000.

### Mobile

Projeto ainda não implementado.
