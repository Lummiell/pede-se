# Pede-se (Em Desenvolvimento)

Aplicativo auto-hospedado para fazer pedidos.

## Índice

- [Descrição](#Descrição)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Executando o Projeto](#executando-o-projeto)
  - [API](#api)
  - [Admin](#admin)
  - [Mobile](#mobile)
- [Testes automatizados](#testes-automatizados)
  - [Com docker (Recomendado)](#com-docker-recomendado)
  - [Sem docker](#sem-docker)
    - [Testando a API](#testando-a-api)

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

## Testes Automatizados

### Com Docker (Recomendado)

Para testar o projeto, é recomendado o uso do [Docker](https://docs.docker.com/engine/install/), com suporte ao comando [`docker compose`](https://docs.docker.com/compose/install/), que normalmente é instalado por padrão com o Docker.

Isso é recomendado pois, nos testes de integração, contêineres são criados automaticamente para testar a interação dos pacotes do projeto.

Os seguintes scripts da raiz do projeto estão disponíveis para a execução dos testes:

- `yarn test:api` - Executa todos os testes unitários e de integração da API da aplicação via docker.

### Sem docker

É possível executar os testes sem a necessidade do Docker.

Todos os pacotes possuem o script `yarn test` que é executável nas suas respectivas raízes, com algumas ressalvas, descritas abaixo.

#### Testando a API

Para executar os testes da API no seu próprio ambiente, entre na [raiz do pacote](/packages/api/):

```sh
cd /packages/api
```

O script `yarn test:unit` pode ser usado para executar os testes unitários da API, que não requerem conexão com a base de dados.

Para executar TODOS os testes usando o script `yarn test`, é exigido que você configure manualmente suas variáveis de ambiente do sistema com os dados de conexão da sua instância da base de dados.

> :warning: **Essa é uma ação potencialmente destrutiva**. Não use informações de conexão de uma base de dados de produção, se não **todos os dados do serão perdidos**.

Exemplo de comando no Bash (Linux):

```sh
DB_username=user \
DB_password=str0ngp455w0rd \
DB_host=localhost \
DB_port=3306 \
DB_database=pedese \
yarn test
```

Exemplo de comando no PowerShell (Windows):

```ps
$Env:DB_username = 'user'; `
$Env:DB_password = 'str0ngp455w0rd'; `
$Env:DB_host = 'localhost'; `
$Env:DB_port = '3306'; `
$Env:DB_database = 'pedese'; `
yarn test
```

> :information_source: Após a execução do comando acima no PowerShell, as variáveis de ambiente permanecerão na memória. Isso pode interferir com a execução da aplicação real. Lembre-se de fechar reabrir o terminal para deletá-las ou de limpá-las manualmente se necessário.
