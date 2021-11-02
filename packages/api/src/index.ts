import "reflect-metadata";
import "./setupenv";
import app from "./app";
import { createConnection } from "typeorm";
import config from "./Database/ormconfig";
const appPort = 3333;
const main = async () => {
  console.log("Connecting to DB...");
  try {
    await createConnection(config);
  } catch (error) {
    console.log("Couldn't connect to DB. Error:");
    console.error(error);
    return;
  }
  console.log("Connected.");
  app.listen(appPort, () => {
    console.log(`Listening on port ${appPort}.`);
  });
};
main();
