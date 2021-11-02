import { Router } from "express";
import { ItemController } from "../Controllers/ItemController";

const itemRouter = Router();

itemRouter.get("/", ItemController.getAll);
itemRouter.get("/:id", ItemController.getOne);
itemRouter.post("/", ItemController.post);
export { itemRouter };
