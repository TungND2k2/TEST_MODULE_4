"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controller/product.controller"));
const routerProduct = (0, express_1.Router)();
routerProduct.get('/products', product_controller_1.default.showHome);
routerProduct.post('/products', product_controller_1.default.createProduct);
routerProduct.put('/products/:id', product_controller_1.default.editProduct);
routerProduct.delete('/products/:id', product_controller_1.default.removeProduct);
routerProduct.get('/products/:id', product_controller_1.default.productDetail);
routerProduct.post('/products/find-by-name', product_controller_1.default.findByNameProduct);
routerProduct.post('/products/find-by-brand', product_controller_1.default.findByBrandProduct);
routerProduct.get('/products/find-by-price', product_controller_1.default.showListProductByPriceASC);
routerProduct.get('/products/find-by-quantity', product_controller_1.default.showListQuantity);
exports.default = routerProduct;
//# sourceMappingURL=product.router.js.map