"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controller/product.controller"));
const routerProduct = (0, express_1.Router)();
routerProduct.get('/products', product_controller_1.default.showHome);
routerProduct.post('/product/create', product_controller_1.default.createProduct);
routerProduct.put('/product/edit/:id', product_controller_1.default.editProduct);
routerProduct.delete('/product/delete/:id', product_controller_1.default.removeProduct);
routerProduct.get('/product/:id/find', product_controller_1.default.productDetail);
routerProduct.post('/product/name', product_controller_1.default.findByNameProduct);
routerProduct.post('/product/brand', product_controller_1.default.findByBrandProduct);
routerProduct.get('/product/price', product_controller_1.default.showListProductByPriceASC);
routerProduct.get('/product/quantity', product_controller_1.default.showListQuantity);
exports.default = routerProduct;
//# sourceMappingURL=product.router.js.map