import { number, object, string } from 'yup';

const itemSchema = object().shape({
  name: string().required().max(128),
  price: number().required().min(0)
});
export { itemSchema };
