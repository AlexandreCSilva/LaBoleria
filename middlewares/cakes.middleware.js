import Joi from "joi";
import { dataBase } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";

const cakeSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .required(),

    price: Joi.number()
        .positive()
        .required(),

    description: Joi.string(),

    image: Joi.string()
        .uri()
        .required(),

    flavourId: Joi.number()
        .positive()
        .required()
})   


async function verifyCake (req, res, next) {
    const validation = cakeSchema.validate(req.body, { abortEarly: false });

    if (validation.error) { 
        console.log(validation.error.message);
        
        if (validation.error.message === '"image" must be a valid uri'){
            return res.sendStatus(STATUS_CODE.UNPROCESSABLE_ENTITY);
        } 
       
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    const cake = await dataBase.query(
        'SELECT * FROM cakes WHERE name = $1',
        [req.body.name]
    );

    if (cake.rows.length !== 0){
        return res.sendStatus(STATUS_CODE.CONFLICT);
    }

    const flavour = await dataBase.query(
        'SELECT * FROM flavours WHERE id = $1',
        [req.body.flavourId]
    );

    if (flavour.rows.length === 0){
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    next();
}

export { verifyCake }