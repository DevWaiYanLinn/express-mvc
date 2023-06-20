import Joi from "joi";
class BaseController {
    protected async validate(rule:any, data:any) {
       const scheme = Joi.object(rule)
       return scheme.validateAsync(data)
    }
}

export default BaseController;