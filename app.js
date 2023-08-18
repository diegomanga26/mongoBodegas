import dotenv from 'dotenv';
import express from 'express';
import appUsers from './routers/users.js';
import appBodegas from './routers/bodegas.js';
import appProductos from './routers/productos.js';
import appInventarios from './routers/inventarios.js';
import appHistoriales from './routers/historiales.js';
import {validateJWT,tokenJWT} from './middlewares/mwJWT.js'

dotenv.config();
let appExpress = express();

appExpress.use(express.json());
appExpress.use("/token", tokenJWT);
appExpress.use("/users", validateJWT, appUsers);
appExpress.use("/bodegas", validateJWT, appBodegas);
appExpress.use("/productos", validateJWT, appProductos);
appExpress.use("/inventarios", validateJWT, appInventarios);
appExpress.use("/historiales", validateJWT, appHistoriales);

let config = JSON.parse(process.env.myServer);
appExpress.listen(config, ()=> {
    console.log(`http://${config.hostname}:${config.port}`);
});