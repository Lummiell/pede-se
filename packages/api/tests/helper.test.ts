import 'reflect-metadata';
import { setupConnection, dropConnection } from './Integration/util';
import { wait } from '../src/Util/wait';

before(() => {
  const hook = async () => {
    let connected = false;
    while (!connected) {
      try {
        await setupConnection();
        connected = true;
      } catch (e) {
        const waitMs = 5000;
        console.log(`Retrying to connect in ${waitMs / 1000}s`);
        await wait(waitMs);
      }
    }
  };
  return hook();
});
after(() => {
  return dropConnection();
});
