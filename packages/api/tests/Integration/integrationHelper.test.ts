import 'reflect-metadata';
import { setupConnection, dropConnection } from '../Integration/util';
import { wait } from '../../src/Util/wait';

const waitMs = 2000;
const maxAttempts = 10;
before(function () {
  this.timeout(2000 + waitMs * maxAttempts);
  const hook = async () => {
    let connected = false;
    let attempts = 0;
    while (!connected) {
      try {
        await setupConnection();
        connected = true;
      } catch (error) {
        console.error(error);
        console.log(`Retrying to connect in ${waitMs / 1000}s`);
        attempts++;
        if (attempts >= maxAttempts) {
          throw error;
        }
        await wait(waitMs);
      }
    }
  };
  return hook();
});
after(() => {
  return dropConnection();
});
