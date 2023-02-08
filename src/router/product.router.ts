import { Router } from 'express';
import ProductController from "../controller/product.controller";

const routerProduct = Router();
routerProduct.get('/products',ProductController.showHome)
routerProduct.post('/product/create',ProductController.createProduct)
routerProduct.put('/product/edit/:id',ProductController.editProduct)
routerProduct.delete('/product/delete/:id',ProductController.removeProduct)
routerProduct.get('/product/:id/find',ProductController.productDetail)
routerProduct.post('/product/name',ProductController.findByNameProduct)
routerProduct.post('/product/brand',ProductController.findByBrandProduct)
routerProduct.get('/product/price',ProductController.showListProductByPriceASC)
routerProduct.get('/product/quantity',ProductController.showListQuantity)
export default routerProduct