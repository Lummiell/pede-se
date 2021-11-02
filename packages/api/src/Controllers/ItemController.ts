import { Request, Response } from "express";
import { Item } from "../Database/Entities/Item";
import { ItemGroupService } from "../Service/ItemGroupService";
import { ItemService } from "../Service/ItemService";
const ItemController = {
  getAll: async (req: Request, res: Response) => {
    const items = await ItemService.find();
    return res.json(items);
  },
  getOne: async (req: Request, res: Response) => {
    const item = await ItemService.findOne(req.params.id);
    if (item) {
      return res.json(item);
    } else {
      return res.status(404).json({ error: "ItemNotFound" });
    }
  },
  post: async (req: Request, res: Response) => {
    const { name, price, group } = req.body;
    const item = new Item();
    item.name = name;
    item.price = price;
    if (group) {
      const groupObj = await ItemGroupService.findOne(group);
      if (groupObj) {
        item.group = groupObj;
      } else {
        return res.status(404).json({ error: "ItemGroupNotFound" });
      }
    }
    const itemInserted = await ItemService.create(item);
    return res.json({ ...itemInserted });
  },
};
export { ItemController };
