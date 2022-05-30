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
