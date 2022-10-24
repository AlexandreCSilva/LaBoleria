import { dataBase } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";

async function verifyPatchById (req, res, next) {
    let order = {};

    if(!req.params.id){
        res.sendStatus(STATUS_CODE.BAD_REQUEST);
    } else {
        order = await dataBase.query( 
            `SELECT *  FROM orders
            WHERE orders.id = $1`,
            [req.params.id]
        );
    }
    
    if (order.rows.length === 0){
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    next();
}

export { verifyPatchById }