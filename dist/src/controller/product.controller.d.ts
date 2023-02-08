import { Request, Response } from "express";
declare class ProductController {
    private productsService;
    constructor();
    showHome: (req: Request, res: Response) => Promise<void>;
    createProduct: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    removeProduct: (req: Request, res: Response) => Promise<void>;
    productDetail: (req: Request, res: Response) => Promise<void>;
    findByNameProduct: (req: Request, res: Response) => Promise<void>;
    findByBrandProduct: (req: Request, res: Response) => Promise<void>;
    showListProductByPriceASC: (req: Request, res: Response) => Promise<void>;
    showListQuantity: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
