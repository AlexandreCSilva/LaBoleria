import Joi from "joi";

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
})   


function verifyCake (req, res, next) {
    const validation = cakeSchema.validate(req.body, { abortEarly: false });

    if (validation.error) { 
        console.log(validation.error.message);
        
        if (validation.error.message === '"image" must be a valid uri'){
            return res.sendStatus(422);
        } 
       
        return res.sendStatus(400);
    }

    next();
}

export { verifyCake }