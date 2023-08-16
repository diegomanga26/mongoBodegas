import { con } from "../db/atlas.js";
import { limitGet } from "../middlewares/limit.js"
import { Router } from "express";

const appHistoriales = Router();

let db = await con();
let historiales = db.collection("historiales");

appHistoriales.get("/", limitGet(), async (req, res) => {
    if (!req.rateLimit) return;
    let result = await historiales.find({}).toArray();
    res.send(result);
});

export default appHistoriales;