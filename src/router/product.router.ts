import { Router } from 'express';
import ProductController from "../controller/product.controller";

const routerProduct = Router();
routerProduct.get('/products',ProductController.showHome)
routerProduct.post('/product/create',ProductController.createProduct)
routerProduct.put('/product/:id',ProductController.editProduct)
routerProduct.delete('/product/:id',ProductController.removeProduct)
routerProduct.get('/product/:id/find',ProductController.productDetail)
routerProduct.post('/product/search/name',ProductController.findByNameProduct)
routerProduct.post('/product/search/brand',ProductController.findByBrandProduct)
routerProduct.get('/product/orderby/price',ProductController.showListProductByPriceASC)
routerProduct.get('/product/orderby/quantity',ProductController.showListQuantity)
export default routerProduct