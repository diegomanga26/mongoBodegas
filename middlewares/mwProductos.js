import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import { validate } from 'class-validator';
import { storageProductos } from '../routers/storage/productos.js';
import { Router } from "express";
const appMwProductosVerify = Router()
const appMwProductos = Router();

appMwProductosVerify.use(async (req, res, next) => {
    if (!req.rateLimit) return;

    let { payload } = req.data;
    const { iat, exp, ...newPayload } = payload
    payload = newPayload
    let clone = JSON.stringify(classToPlain(plainToClass(storageProductos, {}, { ignoreDecorators: true })));
    let verify = clone === JSON.stringify(payload);
    (!verify) ? res.status(406).send({ status: 406, message: "No autorizado para esta colección" }) : next();
});


appMwProductos.use(async (req, res, next) => {

    try {
        let data = plainToClass(storageProductos, req.body);
        await validate(data)
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next()
    } catch (error) {
        res.status(error.status).send(error)
    }
});

export {
    appMwProductosVerify,
    appMwProductos
};