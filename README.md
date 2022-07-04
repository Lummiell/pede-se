# Pede-se (WIP)

Self-hosted app for making orders

(Português: [Leia-me](/README.pt-br.md))

## Index

- [Description](#description)
- [Project Structure](#project-structure)
- [Running the Project](#running-the-project)
  - [API](#api)
  - [Admin](#admin)
  - [Mobile](#mobile)
- [Automatic Testing](#automatic-testing)
  - [With Docker (Recommended)](#with-docker-recommended)
  - [Without Docker](#without-docker)
    - [Testing the API](#testing-the-api)

## Description

**Pede-se** (Portuguese for "Order" as in "A sandwich is ordered") is an app for making orders.

This is a personal project, I'm using it to learn how to make a complete app with the technologies involved (Express, React, React Native, MySQL, etc.).

The objective is the creation of a service that any establishments may implement in their own network or server of choice, which their customers may use with one single app.

## Project Structure

All modules below are inside the [`packages`](/packages) folder.

- [API](/packages/api) (WIP) - Database and App communication
- [Admin](/packages/admin) (Not started) - Web application for service management interface.
- Mobile (Not started) - Client App.

## Running the project

Install all dependencies using [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) at the project's root:

```sh
yarn
```

### API

For running de the API locally:

Move to the project folder with

```sh
cd ./packages/api
```

Create and configure a `.env` file with the parameters listed on [.env.example](/packages/api/src/packages/api/.env.example):

```sh
#API Configuration
APP_port=3333

#MySQL server configuration
DB_username=user
DB_password=str0ngp455w0rd
DB_host=localhost
DB_port=3306
DB_database=pedese
```

Change the values after the equal signs to whichever are the most adequate for your environment.

Then run the `start` script:

```sh
yarn start
```

The API will be served on the local host at port 3333.

### Admin

Move to the project folder:

```sh
cd ./packages/admin
```

Run the `dev` script:

```sh
yarn dev
```

The Web app (which, at the moment, is just a "Hello World!" app) will be compiled and hosted for development on the localhost at port 3000.

### Mobile

Project not implemented.

## Automatic testing

### With Docker (Recommended)

To test the project, usage of [Docker](https://docs.docker.com/engine/install/), with support to the command [`docker compose`](https://docs.docker.com/compose/install/) (which normally comes installed with Docker by default), is recommended.

This is recommended because, in unit tests, containers are automatically created to test the interaction between the project's packages.

The following scripts are available for execution in the project's root:

- `yarn test:api` - Runs all the unit and integration tests of the project's API via docker.

### Without docker

It is possible to run tests without requiring Docker.

All packages contain the script `yarn test`, which is executable in their respective roots, with some caveats, described below.

#### Testing the API

To run the API's tests in your own environment, open the [package's root](/packages/api/):

```sh
cd /packages/api
```

The script `yarn test:unit` can be used to run the API's unit tests, which don't require a connection to the database.

To run ALL tests using the script `yarn test`, it is required that you manually configure your system's environment variables with you own database instance's connection information.

> :warning: **This is a potentially destructive action**. Do not use connection information for a production database, otherwise **all data will be lost**.

Example Bash command (Linux):

```sh
DB_username=user \
DB_password=str0ngp455w0rd \
DB_host=localhost \
DB_port=3306 \
DB_database=pedese \
yarn test
```

Exemple PowerShell command (Windows):

```ps
$Env:DB_username = 'user'; `
$Env:DB_password = 'str0ngp455w0rd'; `
$Env:DB_host = 'localhost'; `
$Env:DB_port = '3306'; `
$Env:DB_database = 'pedese'; `
yarn test
```

> :information_source: After the above command's execution in PowerShell, the environment variables will be kept in memory. This could interfere with running the actual application. Remember to close and reopen the terminal to delete them or to clean them manually if needed.
