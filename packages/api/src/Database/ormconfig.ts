import path from 'path';
import { DataSource } from 'typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
export const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_host,
  port: process.env.DB_port ? Number(process.env.DB_port) : undefined,
  username: process.env.DB_username,
  password: process.env.DB_password,
  database: process.env.DB_database,
  logging: false,
  synchronize: true,
  entities: [path.join(__dirname, 'Entities', '**', '*{.js,.ts}')],
  migrations: [path.join(__dirname, 'Migrations', '**', '*.ts')]
};
export const dataSource = new DataSource(config);
