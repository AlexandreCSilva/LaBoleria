import { dataBase } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";

async function getOrderById (req, res) {
    let json = {};

    if(!req.params.id){
        res.sendStatus(STATUS_CODE.BAD_REQUEST);
    } else {
        json = await dataBase.query( 
            `SELECT json_agg(clients.*) AS client, json_agg(json_build_object('id', cakes.id, 'name', cakes.name, 'price', cakes."price", 'image', cakes."image", 'description', cakes."description", 'flavour', flavours.name)) AS cake, orders.id AS "orderId", orders."createdAt", orders."quantity", orders."totalPrice", orders."isDelivered"  FROM orders
            JOIN cakes ON cakes.id = orders."cakeId"
            JOIN clients ON clients.id = orders."clientId"
            JOIN flavours ON flavours.id = cakes."flavourId"
            WHERE orders.id = $1
            GROUP BY orders.id, clients.id, cakes.id, flavours.id`,
            [req.params.id]
        );
    }
    

    if (json.rows.length === 0){
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    res.send(json.rows).status(STATUS_CODE.OK);
}

export { getOrderById }