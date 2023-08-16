import { con } from "../db/atlas.js";
import { limitGet } from "../middlewares/limit.js"
import { Router } from "express";

const appBodegas = Router();

let db = await con();
let bodegas = db.collection("bodegas");

appBodegas.get("/", limitGet(), async (req, res) => {
    if (!req.rateLimit) return;
    let result = await bodegas.find({}).toArray();
    res.send(result);
});

appBodegas.post("/", limitGet(), async (req, res) => {

    try {
        let data = req.body;
        let insert = await bodegas.insertOne(data);

        if (insert.insertedId !== undefined) {
            res.status(200).send({ msg: "Se ha guardado correctamente la Bodega." });
        } else {
            res.send({ status: 400, message: "Error en el ingreso de datos." });
        }

    } catch (error) {
        res.status(400).send({ error: error });
    }
});


export default appBodegas;