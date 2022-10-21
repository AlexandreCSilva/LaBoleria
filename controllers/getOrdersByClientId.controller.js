import { dataBase } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";

async function getOrderByClientId (req, res) {
    const client = await dataBase.query(
        `SELECT orders.id AS "orderId", orders."quantity", orders."createdAt", orders."totalPrice", cakes.name AS "cakeName" FROM clients
        JOIN orders ON orders."clientId" = clients.id
        JOIN cakes ON orders."cakeId" = cakes.id
        WHERE clients.id = $1`,
        [req.params.id]
    );

    if (client.rows.length === 0){
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    res.send(client.rows).status(STATUS_CODE.OK);
}

export { getOrderByClientId }