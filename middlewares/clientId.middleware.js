import { dataBase } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";

async function verifyClientId(req, res, next) {
    if(!req.params.id){
        res.sendStatus(STATUS_CODE.BAD_REQUEST);
    } else {
        const client = await dataBase.query(
            `SELECT *  FROM clients
            WHERE clients.id = $1`,
            [req.params.id]
        );

        if (client.rows.length === 0){
            return res.sendStatus(STATUS_CODE.NOT_FOUND);
        }
    }
    
    next();
}

export { verifyClientId }