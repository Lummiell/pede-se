import { app } from './app';

const appPort = 3333;

app.listen(appPort, () => {
  console.log(`Listening on port ${appPort}`);
});
