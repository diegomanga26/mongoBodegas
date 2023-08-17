import { con } from "../db/atlas.js";
import { limitGet } from "../middlewares/limit.js"
import { Router } from "express";

const appInventarios = Router();

let db = await con();
let inventarios = db.collection("inventarios");

appInventarios.get("/", limitGet(), async (req, res) => {
    if (!req.rateLimit) return;
    let result = await inventarios.find({}).toArray();
    res.send(result);
});

appInventarios.post("/hola", limitGet(), async (req, res) => {
    if (!req.rateLimit) return;
    try {
        let { cantidad } = req.body;
        cantidad = cantidad ?? 10;
        let data = req.body;
        let insert = await inventarios.insertOne(data);

        if (insert.insertedId !== undefined) {
            res.status(200).send({ msg: "Se ha guardado correctamente la Bodega." });
        } else {
            res.send({ status: 400, message: "Error en el ingreso de datos." });
        }

    } catch (error) {
        res.status(400).send({ error: error });
    }





    if (!req.rateLimit) return;

    const { ID_BODEGA, ID_PRODUCTO } = req.body;
    let { cantidad } = req.body;
    cantidad = cantidad ?? 10;

    if (!ID_BODEGA || !ID_PRODUCTO) {
        res.status(400).json({ message: "Missing required fields" });
        return;
    }

    try {
        const existingInventario = await inventarios.findOne({
            id_bodega: ID_BODEGA,
            id_producto: ID_PRODUCTO
        });

        if (existingInventario) {
            const updatedCantidad = existingInventario.cantidad + CANTIDAD;
            await inventarios.updateOne(
                { id_bodega: ID_BODEGA, id_producto: ID_PRODUCTO },
                { $set: { cantidad: updatedCantidad } }
            );
            res.status(200).json({ message: "Inventario updated successfully" });
        } else {
            const newInventarioId = await siguienteId("inventarios");
            await inventarios.insertOne({
                id: newInventarioId,
                id_bodega: ID_BODEGA,
                id_producto: ID_PRODUCTO,
                cantidad: CANTIDAD,
                created_by: req.body.CREATE_BY,
                created_at: req.body.CREATE_AT
            });
            res.status(201).json({ message: "Inventario added successfully" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error inserting/updating inventario", error: error.message });
    }
});

export default appInventarios;