import Joi from "joi";
import { dataBase } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";

const flavourSchema = Joi.object({
    name: Joi.string()
        .min(2)
        .required(),
})   


async function verifyFlavour (req, res, next) {
    const validation = flavourSchema.validate(req.body, { abortEarly: false });

    if (validation.error) { 
        console.log(validation.error.message);
        return res.sendStatus(STATUS_CODE.BAD_REQUEST);
    }

    const flavour = await dataBase.query(
        'SELECT * FROM flavours WHERE name = $1',
        [req.body.name]
    );

    if (flavour.rows.length !== 0){
        return res.sendStatus(STATUS_CODE.CONFLICT);
    }

    next();
}

export { verifyFlavour }