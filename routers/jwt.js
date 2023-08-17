import {tokenJWT} from "../middlewares/mwJWT.js";
import {Router} from 'express';
const appJWT = Router();

appJWT.get("/", tokenJWT, (req,res)=>{
    res.send(req.data)
});

export default appJWT;