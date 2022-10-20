import { dataBase } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";

async function postClient (req, res) {
    await dataBase.query(
        'INSERT INTO clients ("name", "address", "phone") VALUES ($1, $2, $3)',
        [req.body.name, req.body.address, req.body.phone]
    );

    res.sendStatus(STATUS_CODE.CREATED);
}

export { postClient }