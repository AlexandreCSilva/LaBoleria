import { dataBase } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";

async function getOrder (req, res) {
    let json;
    if(!req.query.date){
        json = await dataBase.query(
            `SELECT json_agg(clients.*) AS client, json_agg(cakes.*) AS cake, orders.id AS "orderId", orders."createdAt", orders."quantity", orders."totalPrice"  FROM orders
            JOIN cakes ON cakes.id = orders."cakeId"
            JOIN clients ON clients.id = orders."clientId"
            GROUP BY orders.id, clients.id, cakes.id`
        );
    } else {
        json = await dataBase.query(
            `SELECT json_agg(clients.*) AS client, json_agg(cakes.*) AS cake, orders.id AS "orderId", orders."createdAt", orders."quantity", orders."totalPrice"  FROM orders
            JOIN cakes ON cakes.id = orders."cakeId"
            JOIN clients ON clients.id = orders."clientId"
            WHERE CAST(orders."createdAt" AS DATE) = $1 
            GROUP BY orders.id, clients.id, cakes.id`,
            [req.query.date]
        );
    }
    

    if (json.rows.length === 0){
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    res.send(json.rows).status(STATUS_CODE.OK);
}

export { getOrder }