import { con } from "../db/atlas.js";
import { limitGet } from "../middlewares/limit.js"
import { Router } from "express";
import { appMwInventarios, appMwInventariosVerify } from "../middlewares/mwInventarios.js";

const appInventarios = Router();

let db = await con();
let inventarios = db.collection("inventarios");

appInventarios.get("/", limitGet(), appMwInventariosVerify, async (req, res) => {
    if (!req.rateLimit) return;
    let result = await inventarios.find({}).toArray();
    res.send(result);
});

appInventarios.post("/", async (req, res) => {
    try {
        const { id, nombre, estado, created_by } = req.body;

        const nuevoProducto = {
            id,
            nombre,
            estado,
            created_by,
        };

        const result = await productos.insertOne(nuevoProducto);
        const idProducto = result.insertedId;

        // Asignar una cantidad inicial en la bodega por defecto
        const nuevaCantidad = 10; // Cantidad inicial deseada
        const idBodegaDefecto = 1; // ID de la bodega por defecto

        const nuevoInventario = {
            id_bodega: idBodegaDefecto,
            id_producto: idProducto,
            cantidad: nuevaCantidad,
        };

        await inventarios.insertOne(nuevoInventario);

        res.status(201).json({ message: 'Producto creado exitosamente.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor.' });
    }
});

export default appInventarios;