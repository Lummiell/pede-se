import { ConnectionOptions } from "typeorm";
const config: ConnectionOptions = {
  type: "mysql",
  host: process.env.DB_host,
  port: process.env.DB_port ? Number(process.env.DB_port) : undefined,
  username: process.env.DB_username,
  password: process.env.DB_password,
  database: process.env.DB_database,
  logging: false,
  synchronize: true,
  entities: [__dirname + "/Entities/**/*{.js,.ts}"],
  migrations: [__dirname + "/Migrations/**/*.ts"],
  cli: {
    entitiesDir: __dirname + "/Entities",
    migrationsDir: __dirname + "/Migrations",
  },
};
export default config;
