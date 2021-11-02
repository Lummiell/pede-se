import { Router } from "express";
import { itemRouter } from "./item";
import { itemGroupRouter } from "./itemGroup";

const routes = Router();
routes.use("/item", itemRouter);
routes.use("/itemgroup", itemGroupRouter);
export { routes };
