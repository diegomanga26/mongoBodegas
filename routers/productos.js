import { con } from "../db/atlas.js";
import { limitGet } from "../middlewares/limit.js"
import { Router } from "express";

const appProductos = Router();

let db = await con();
let productos = db.collection("productos");

appProductos.get("/", limitGet(), async (req, res) => {
    if (!req.rateLimit) return;
    let result = await productos.find({}).toArray();
    res.send(result);
});

appProductos.get("/total", limitGet(), async (req, res) => {
    if (!req.rateLimit) return;
    let result = await productos.aggregate([
        {
            $lookup: {
                from: 'inventarios',
                localField: 'id',
                foreignField: 'id_producto',
                as: 'inventarios',
            }
        },
        {
            $unwind: '$inventarios',
        },
        {
            $group: {
                _id: '$_id',
                id: { $first: '$id' },
                nombre: { $first: '$nombre' },
                estado: { $first: '$estado' },
                created_by: { $first: '$created_by' },
                total: { $sum: '$inventarios.cantidad' }
            }
        },
        {
            $sort: { total: -1 }
        },
        {
            $project: {
                _id: 0,
                id: 1,
                nombre: 1,
                estado: 1,
                created_by: 1,
                total: 1,
            }
        }
    ]).toArray();
    res.send(result);
});

export default appProductos;