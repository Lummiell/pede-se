import "./setup";
import "reflect-metadata";
import { createConnection } from "typeorm";
import config from "./Database/ormconfig";
import app from "./app";
import { Customer } from "./Database/Entities/Customer";
const main = async () => {
  await createConnection(config);
  const customer = Customer.create({
    customerID:"123123abcabc",
    address: "Rua A",
    city: "Cidade A",
    name: "Alice",
    number: "12A",
    phone: "33333-3333",
    state: "SP",
    zipCode: "33333-333",
  });
  await customer.save()
  app.listen(3333, () => {
    console.log("Listening");
  });
};
main();
