import { dataBase } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";

async function postOrder (req, res) {
    await dataBase.query(
        'INSERT INTO orders ("clientId", "cakeId", "quantity", "totalPrice") VALUES ($1, $2, $3, $4)',
        [req.body.clientId, req.body.cakeId, req.body.quantity, req.body.totalPrice]
    );

    res.sendStatus(STATUS_CODE.CREATED);
}

export { postOrder }