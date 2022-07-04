import { Router } from 'express';
import { ItemController } from '../Controllers/ItemController';
import { getValidator } from '../Middleware/Validator';
import { itemPostSchema } from '../Validation/Schemas/Item/itemPostSchema';

const itemPostValidator = getValidator(itemPostSchema);
const itemRouter = Router();

itemRouter.get('/', ItemController.getAll);
itemRouter.get('/:id', ItemController.getOne);
itemRouter.post('/', itemPostValidator, ItemController.post);
export { itemRouter };
