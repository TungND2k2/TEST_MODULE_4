import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
import cors from 'cors'
import routerProduct from "./src/router/product.router"
import {AppDataSource} from "./src/data-source";

AppDataSource.initialize().then(() => {
    console.log('Data connection')
})
app.use(cors())
app.use('',routerProduct)
// app.use(bodyParser.json());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});