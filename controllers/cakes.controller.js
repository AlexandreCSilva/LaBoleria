import { dataBase } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";

async function postCake (req, res) {
    await dataBase.query(
        'INSERT INTO cakes ("name", "price", "description", "image") VALUES ($1, $2, $3, $4)',
        [req.body.name, req.body.price, req.body.description, req.body.image]
    );

    res.sendStatus(STATUS_CODE.CREATED);
}

export { postCake }