import { dataBase } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";

async function postFlavour (req, res) {
    await dataBase.query(
        'INSERT INTO flavours (name) VALUES ($1)',
        [req.body.name]
    );

    res.sendStatus(STATUS_CODE.CREATED);
}

export { postFlavour }