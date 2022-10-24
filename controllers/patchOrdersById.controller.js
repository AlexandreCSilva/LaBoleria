import { dataBase } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";

async function patchOrderById (req, res) {
   
    await dataBase.query( 
            `UPDATE orders
            SET "isDelivered" = true
            WHERE orders.id = $1`,
            [req.params.id]
        );


    res.sendStatus(STATUS_CODE.NO_CONTENT);
}

export { patchOrderById }