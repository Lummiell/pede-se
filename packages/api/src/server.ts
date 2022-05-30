import { app } from './app';
const envPort = process.env.APP_port;
const appPort = envPort ? Number(envPort) : 3333;

app.listen(appPort, () => {
  console.log(`Listening on port ${appPort}`);
});
