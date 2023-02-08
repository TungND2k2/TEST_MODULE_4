import {AppDataSource} from "../data-source";
import {Laptop} from "../model/laptop.model";

class ProductService {
    private productRepository

    constructor() {
        this.productRepository = AppDataSource.getRepository(Laptop)
    }

    getAll = async () => {
        let sql = 'select l.id, l.name, l.price, b.id as idCategory, b.name as nameCategory from laptop l join brand b on l.id_brand = b.id'
        let products = await this.productRepository.query(sql)
        return products;
    }

    save = async (product) => {
        return this.productRepository.save(product);
    }

    findByIdProduct = async (id) => {
        let sql = `select l.id, l.name, l.price, b.id as idCategory, b.name as nameCategory
                   from laptop l
                            join brand b on l.id_brand = b.id
                   where l.id = ${id}`
        let products = await this.productRepository.query(sql)
        return products;
    }

    updateProduct = async (id, newProduct) => {
        let product = await this.productRepository.findOneBy({id: id});
        if (!product) {
            return null;
        }
        return this.productRepository.update({id: id}, newProduct);
    }

    remove = async (id) => {
        let product = await this.productRepository.findOneBy({id: id});
        if (!product) {
            return null;
        }
        return this.productRepository.remove({id: id});
    }

    findByName = async (name) => {
        let sql = `select l.id, l.name, l.price, b.id as idCategory, b.name as nameCategory
                   from laptop l
                            join brand b on l.id_brand = b.id
                   where l.name = '${name}'`
        let products = await this.productRepository.query(sql)
        return products;
    }
    findByBrand = async (brand) => {
        let sql = `select l.id, l.name, l.price, b.id as idCategory, b.name as nameCategory
                   from laptop l
                            join brand b on l.id_brand = b.id
                   where b.name = '${brand}'`
        let products = await this.productRepository.query(sql)
        return products;
    }
    listASCPrice = async () => {
        let sql = `select *
                   from laptop
                   order by price asc`;
        let products = await this.productRepository.query(sql)
        return products
    }
    listDescQuantity = async () => {
        let sql = `select *
                   from laptop
                   order by quantity desc`;
        let products = await this.productRepository.query(sql)
        return products
    }
}

export default new ProductService();