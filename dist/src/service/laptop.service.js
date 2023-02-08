"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const laptop_model_1 = require("../model/laptop.model");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let sql = 'select l.id, l.name, l.price, b.id as idCategory, b.name as nameCategory from laptop l join brand b on l.id_brand = b.id';
            let products = await this.productRepository.query(sql);
            return products;
        };
        this.save = async (product) => {
            return this.productRepository.save(product);
        };
        this.findByIdProduct = async (id) => {
            let sql = `select l.id, l.name, l.price, b.id as idCategory, b.name as nameCategory from laptop l join brand b on l.id_brand = b.id where l.id=${id}`;
            let products = await this.productRepository.query(sql);
            return products;
        };
        this.updateProduct = async (id, newProduct) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.productRepository.update({ id: id }, newProduct);
        };
        this.remove = async (id) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.productRepository.remove({ id: id });
        };
        this.findByName = async (name) => {
            let sql = `select l.id, l.name, l.price, b.id as idCategory, b.name as nameCategory from laptop l join brand b on l.id_brand = b.id where l.name=${name}`;
            let products = await this.productRepository.query(sql);
            return products;
        };
        this.findByBrand = async (brand) => {
            let sql = `select l.id, l.name, l.price, b.id as idCategory, b.name as nameCategory from laptop l join brand b on l.id_brand = b.id where l.name=${brand}`;
            let products = await this.productRepository.query(sql);
            return products;
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(laptop_model_1.Laptop);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=laptop.service.js.map