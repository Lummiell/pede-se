import { ConnectionOptions } from "typeorm";
const config: ConnectionOptions = {
  type: "mysql",
  host: process.env.DB_host,
  port: process.env.DB_port ? Number(process.env.DB_port) : undefined,
  username: process.env.DB_username,
  password: process.env.DB_password,
  database: process.env.DB_database,
  logging: false,
  synchronize:true,
  entities: ["src/Database/Entities/**/*.ts"],
  migrations: ["src/Database/Migrations/**/*.ts"],
  cli: {
    entitiesDir: "src/Database/Entities",
    migrationsDir: "src/Database/Migrations",
  },
};
export default config;
