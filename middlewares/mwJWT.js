import dotenv from 'dotenv';
import { SignJWT, jwtVerify } from 'jose';
import express from 'express';
import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import storageUsers from '../routers/storage/users';
import storageBodegas from '../routers/storage/bodegas';
import storageProductos from '../routers/storage/productos';
import storageInventarios from '../routers/storage/inventarios';
import storageHistoriales from '../routers/storage/historiales';



const tokenJWT = express();
const validateJWT = express();
dotenv.config("../");

tokenJWT.use(async (req, res, next) => {
    let inst;
    switch (req.query.tabla) {
        case 'users':
            inst = plainToClass(storageUsers, {}, { ignoreDecorators: true })
            break;
        case 'bodegas':
            inst = plainToClass(storageBodegas, {}, { ignoreDecorators: true })
            break;
        case 'productos':
            inst = plainToClass(storageProductos, {}, { ignoreDecorators: true })
            break;
        case 'inventarios':
            inst = plainToClass(storageInventarios, {}, { ignoreDecorators: true })
            break;
        case 'historiales':
            inst = plainToClass(storageHistoriales, {}, { ignoreDecorators: true })
            break;
        default:
            res.json({ status: 406, message: "No se puede generar el token" });
            break;
    }

    let interfaceData = classToPlain(inst);

    const encoder = new TextEncoder();
    const jwtconstructor = new SignJWT({ interfaceData });
    const jwt = await jwtconstructor
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .setIssuedAt()
        .setExpirationTime("30m")
        .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    req.data = jwt;
    next();
})

validateJWT.use(async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.json({ status: 401, message: "Token no enviado" });
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(
            authorization,
            encoder.encode(process.env.JWT_PRIVATE_KEY)
        );

        req.data = jwtData.payload;
        next();
    } catch (error) {
        res.json({ status: 401, message: "Token caducado" });
    }
});

export {
    tokenJWT,
    validateJWT
};