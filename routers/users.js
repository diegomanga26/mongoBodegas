import { con } from "../db/atlas.js";
import { limitGet } from "../middlewares/limit.js"
import { Router } from "express";

const appUsers = Router();

let db = await con();
let users = db.collection("users");

appUsers.get("/", limitGet(), async (req, res) => {
    if (!req.rateLimit) return;
    let result = await users.find({}).toArray();
    res.send(result);
});

export default appUsers;