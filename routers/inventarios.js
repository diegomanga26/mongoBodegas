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

export default appInventarios;