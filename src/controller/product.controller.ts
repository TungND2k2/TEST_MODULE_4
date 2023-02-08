import {Request, Response} from "express";
import ProductService from "../service/product.service";

class ProductController {
    private productsService

    constructor() {
        this.productsService = ProductService
    }

    showHome = async (req: Request, res: Response) => {
        try {
            let product = await this.productsService.getAll()
            res.status(200).json(product)

        } catch (err) {
            console.log(err)
        }
    }
    createProduct = async (req: Request, res: Response) => {
        try {
            let productNew = req.body;
            let createProduct = await this.productsService.save(productNew)
            res.status(200).json({message: 'Product created'})
        } catch (err) {
            console.log(err)
        }
    }
    editProduct = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let newProduct = req.body;
            let update = await this.productsService.updateProduct(id, newProduct);
            res.status(200).json({message: 'update succes'})
        } catch (err) {
            console.log(err)
        }

    }
    removeProduct = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let product = await this.productsService.remove(id);
            res.status(200).json({message: 'remove succes'})
        } catch (err) {
            console.log(err)
        }
    }
    productDetail = async (req: Request, res: Response) => {
        try {
            console.log(req.query)
            let id=req.params.id;
            let product=await this.productsService.findByIdProduct(id)
            res.status(200).json(product)

        } catch (err) {

        }
    }
    findByNameProduct = async   (req: Request, res: Response) => {
        try {
            let name=req.body.name
            let product = await this.productsService.findByName(name)
            res.status(200).json(product)
        }
        catch (err) {
            console.log(err)
        }
    }
    findByBrandProduct = async   (req: Request, res: Response) => {
        try {
            let brand=req.body.brand
            let product = await this.productsService.findByBrand(brand)
            res.status(200).json(product)
        }
        catch (err) {
            console.log(err)
        }
    }
    showListProductByPriceASC = async (req: Request,res: Response) => {
        try {
            let product = await this.productsService.listASCPrice()
            res.status(200).json(product)
        }
        catch (err) {
            console.log(err)
        }
    }
    showListQuantity = async (req: Request,res: Response) => {
        console.log(1)
           try{
               let product = await this.productsService.listDescQuantity()
               res.status(200).json(product)
           }
           catch (er){
               console.log(er.message)
           }

    }


}

export default new ProductController();
