import { Router } from 'express';
import { ItemGroupController } from '../Controllers/ItemGroupController';

const itemGroupRouter = Router();

itemGroupRouter.get('/', ItemGroupController.get);
itemGroupRouter.post('/', ItemGroupController.post);
export { itemGroupRouter };
