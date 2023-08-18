import { con } from "../db/atlas.js";
import { limitGet } from "../middlewares/limit.js"
import { Router } from "express";

const appProductos = Router();

let db = await con();
let productos = db.collection("productos");
let inventarios = db.collection("inventarios");

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

appProductos.post("/", limitGet(), async (req, res) => {
    if (!req.rateLimit) return;
    try {
        const nuevoProducto = {
            ...req.body
        };

        const { id } = nuevoProducto
        console.log(id);

        const insertProductoResult = await productos.insertOne(nuevoProducto);

        const insertInventarioResult = await inventarios.insertOne({
            id: 10,
            id_bodega: 10,
            id_producto: id,
            cantidad: 50
        });

        if (insertInventarioResult.insertedId !== undefined) {
            res.status(200).send({ msg: "Se ha guardado correctamente el Producto y su Inventario." });
        } else {
            res.status(400).send({ status: 400, message: "Error en el ingreso de datos." });
        }
        res.send()
    } catch (error) {
        res.status(400).send({ error: error });
        console.log(error);
    }
});

export default appProductos;