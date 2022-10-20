import Joi from "joi";
import { STATUS_CODE } from "../enums/statusCode.js";

const clientSchema = Joi.object({
    name: Joi.string()
        .min(1)
        .required(),

    address: Joi.string()
        .min(1)
        .required(),

    phone: Joi.string()
        .min(10)
        .max(11)
        .required(),
})   


async function verifyClient (req, res, next) {
    const validation = clientSchema.validate(req.body, { abortEarly: false });

    if (validation.error) { 
        console.log(validation.error.message);
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    next();
}

export { verifyClient }