import express from 'express';
import { routes } from './Routes';
const app = express();
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
app.use(express.json());
app.use(routes);

export { app };
