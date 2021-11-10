import 'reflect-metadata';
import './setupenv';
import { createConnection } from 'typeorm';
import config from './Database/ormconfig';
const main = async () => {
  console.log('Connecting to DB...');
  try {
    await createConnection(config);
  } catch (error) {
    console.log("Couldn't connect to DB. Error:");
    console.error(error);
    return;
  }
  console.log('Connected.');
  import('./app');
};
main();
