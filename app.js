import dotenv from 'dotenv';
import express from 'express';
import appUsers from './routers/users.js';
import appBodegas from './routers/bodegas.js';
import appProductos from './routers/productos.js';
import appInventarios from './routers/inventarios.js';
import appHistoriales from './routers/historiales.js';

dotenv.config();
let appExpress = express();

appExpress.use(express.json());
appExpress.use("/users", appUsers);
appExpress.use("/bodegas", appBodegas);
appExpress.use("/productos", appProductos);
appExpress.use("/inventarios", appInventarios);
appExpress.use("/historiales", appHistoriales);

let config = JSON.parse(process.env.myServer);
appExpress.listen(config, ()=> {
    console.log(`http://${config.hostname}:${config.port}`);
});