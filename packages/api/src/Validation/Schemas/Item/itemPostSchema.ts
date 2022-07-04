import { string } from 'yup';
import { itemSchema } from './itemSchema';

const itemPostSchema = itemSchema.shape({
  itemGroupID: string().uuid().notRequired()
});
export { itemPostSchema };
