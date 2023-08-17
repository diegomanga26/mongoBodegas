import express from 'express';
import 'reflect-metadata';
import {plainToClass} from 'class-transformer';
import {validate} from 'class-validator';
import { storageBodegas } from '../routers/storage/bodegas.js';
const appMwBodegasData = express();
const appMwBodegas = express();

appMwBodegasData.use(async(req,res,next)=>{
    try {
        let data = plainToClass(storageBodegas, req.body, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        req.data = JSON.stringify(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})
appMwBodegas.use(async(req,res,next)=>{
    let json = Object.assign(req.data.interfaceData, req.body);
    try {
        let data = plainToClass(storageBodegas, json, { excludeExtraneousValues: true });
        await validate(data);
        req.body = data;
        next();
    } catch (err) {
        res.status(err.status).json(err)
    }
})

export {
    appMwBodegasData,
    appMwBodegas
};