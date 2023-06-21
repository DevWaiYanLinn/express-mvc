import Joi from 'joi';
import prisma from '../prisma';

class BaseController {
    protected model = prisma;

    public async validate(rule: any, data: any) {
        return await Joi.object(rule)
            .options({ abortEarly: false })
            .validateAsync(data)
            .catch((errors) => errors);
    }
}

export default BaseController;
