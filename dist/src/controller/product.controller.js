"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("../service/product.service"));
class ProductController {
    constructor() {
        this.showHome = async (req, res) => {
            try {
                let product = await this.productsService.getAll();
                res.status(200).json(product);
            }
            catch (err) {
                console.log(err);
            }
        };
        this.createProduct = async (req, res) => {
            try {
                let productNew = req.body;
                let createProduct = await this.productsService.save(productNew);
                res.status(200).json({ message: 'Product created' });
            }
            catch (err) {
                console.log(err);
            }
        };
        this.editProduct = async (req, res) => {
            try {
                let id = req.params.id;
                let newProduct = req.body;
                let update = await this.productsService.updateProduct(id, newProduct);
                res.status(200).json({ message: 'update succes' });
            }
            catch (err) {
                console.log(err);
            }
        };
        this.removeProduct = async (req, res) => {
            try {
                let id = req.params.id;
                let product = await this.productsService.remove(id);
                res.status(200).json({ message: 'remove succes' });
            }
            catch (err) {
                console.log(err);
            }
        };
        this.productDetail = async (req, res) => {
            try {
                console.log(req.query);
                let id = req.params.id;
                let product = await this.productsService.findByIdProduct(id);
                res.status(200).json(product);
            }
            catch (err) {
            }
        };
        this.findByNameProduct = async (req, res) => {
            try {
                let name = req.body.name;
                let product = await this.productsService.findByName(name);
                res.status(200).json(product);
            }
            catch (err) {
                console.log(err);
            }
        };
        this.findByBrandProduct = async (req, res) => {
            try {
                let brand = req.body.brand;
                let product = await this.productsService.findByBrand(brand);
                res.status(200).json(product);
            }
            catch (err) {
                console.log(err);
            }
        };
        this.showListProductByPriceASC = async (req, res) => {
            try {
                let product = await this.productsService.listASCPrice();
                res.status(200).json(product);
            }
            catch (err) {
                console.log(err);
            }
        };
        this.showListQuantity = async (req, res) => {
            console.log(1);
            try {
                let product = await this.productsService.listDescQuantity();
                res.status(200).json(product);
            }
            catch (er) {
                console.log(er.message);
            }
        };
        this.productsService = product_service_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=product.controller.js.map