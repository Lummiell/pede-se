import path from 'path';
import { ConnectionOptions } from 'typeorm';
const config: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_host,
  port: process.env.DB_port ? Number(process.env.DB_port) : undefined,
  username: process.env.DB_username,
  password: process.env.DB_password,
  database: process.env.DB_database,
  logging: false,
  synchronize: true,
  entities: [path.join(__dirname, 'Entities', '**', '*{.js,.ts}')], // [__dirname + '/Entities/**/*{.js,.ts}'],
  migrations: [path.join(__dirname, 'Migrations', '**', '*.ts')], // [__dirname + '/Migrations/**/*.ts'],
  cli: {
    entitiesDir: path.join(__dirname, 'Entities'), // __dirname + '/Entities',
    migrationsDir: path.join(__dirname, 'Migrations') // __dirname + '/Migrations'
  }
};
export default config;
