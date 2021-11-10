import express from 'express';
import { routes } from './Routes';
const appPort = 3333;
const app = express();
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(express.json());
app.use(routes);
app.listen(appPort, () => {
  console.log(`Listening on port ${appPort}`);
});
