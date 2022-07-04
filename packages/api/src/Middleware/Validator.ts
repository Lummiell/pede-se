import { NextFunction, Request, Response } from 'express';
import { BaseSchema, ValidationError } from 'yup';

const getValidator =
  (schema: BaseSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    try {
      await schema.validate(body, { abortEarly: false });
    } catch (e) {
      if (e instanceof ValidationError) {
        return res.status(422).json({ errors: e.inner });
      } else {
        throw e;
      }
    }
    next();
  };

export { getValidator };
