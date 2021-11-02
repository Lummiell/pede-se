# Pede-se (WIP)

Self-hosted app for making orders

## Descrição

**Pede-se** (Portuguese for "Order" as in "A sandwich is ordered") is (read as: will be), as written above, an app for making orders.

The objective is the creation of a service that any estabilishments may implement in their own network or server of choice, which their cutomers may use with one single app.

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

```env
# MySQL server configuration
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

The Web app (which, at the moment, is just a "Hello World!" app) will be cmpiled and hosted for development on the localhost at port 3000.

### Mobile

Project not implemented.
