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

export default appProductos;