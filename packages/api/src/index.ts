import 'reflect-metadata';
import './setupenv';
import { dataSource } from './Database/ormconfig';
const main = async () => {
  console.log('Connecting to DB...');
  try {
    await dataSource.initialize();
  } catch (error) {
    console.log("Couldn't connect to DB. Error:");
    console.error(error);
    return;
  }
  console.log('Connected.');
  import('./app');
};
main();
