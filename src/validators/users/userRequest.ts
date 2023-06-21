import Joi from 'joi';
import prisma from '../../prisma';
export default {
    store: () => {
        return {
            name: Joi.string().alphanum().min(3).max(30).required(),
            email: Joi.string()
                   .custom((value, helpers) => {
                    return helpers.error('any.invalid');
                }),
            password: Joi.string().min(8).required(),
        };
    },
};
