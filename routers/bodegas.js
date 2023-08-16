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

export default appBodegas;