import { Router } from 'express';
import ProductController from "../controller/product.controller";

const routerProduct = Router();
routerProduct.get('/products',ProductController.showHome)
routerProduct.post('/products',ProductController.createProduct)
routerProduct.put('/products/:id',ProductController.editProduct)
routerProduct.delete('/products/:id',ProductController.removeProduct)
routerProduct.get('/products/:id',ProductController.productDetail)
routerProduct.post('/products/find-by-name',ProductController.findByNameProduct)
routerProduct.post('/products/find-by-brand',ProductController.findByBrandProduct)
routerProduct.get('/products/find-by-price',ProductController.showListProductByPriceASC)
routerProduct.get('/products/find-by-quantity',ProductController.showListQuantity)
export default routerProduct