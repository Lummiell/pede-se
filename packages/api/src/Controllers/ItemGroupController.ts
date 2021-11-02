import { Request, Response } from "express";
import { ItemGroup } from "../Database/Entities/ItemGroup";
import { ItemGroupService } from "../Service/ItemGroupService";

const ItemGroupController = {
  get: async (req: Request, res: Response) => {
    const groups = await ItemGroupService.list();
    return res.json(groups);
  },
  post: async (req: Request, res: Response) => {
    const { name } = req.body;
    const itemGroup = new ItemGroup();
    itemGroup.name = name;
    const result = await ItemGroupService.create(itemGroup);
    return res.json(result);
  },
};
export { ItemGroupController };
