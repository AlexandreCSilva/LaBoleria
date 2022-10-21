import Joi from "joi";
import { dataBase } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";

const orderSchema = Joi.object({
    clientId: Joi.number()
        .positive()
        .required(),

    cakeId: Joi.number()
        .positive()
        .required(),

    quantity: Joi.number()
        .positive()
        .max(5)
        .required(),

    totalPrice: Joi.number()
        .positive()
        .required(),
})   


async function verifyPostOrder (req, res, next) {
    const validation = orderSchema.validate(req.body, { abortEarly: false });

    if (validation.error) { 
        console.log(validation.error.message);
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    const client = await dataBase.query(
        'SELECT * FROM clients WHERE id = $1',
        [req.body.clientId]
    );

    if (client.rows.length === 0){
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    const cake = await dataBase.query(
        'SELECT * FROM cakes WHERE id = $1',
        [req.body.cakeId]
    );

    if (cake.rows.length === 0){
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    next();
}

export { verifyPostOrder }