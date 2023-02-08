declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    save: (product: any) => Promise<any>;
    findByIdProduct: (id: any) => Promise<any>;
    updateProduct: (id: any, newProduct: any) => Promise<any>;
    remove: (id: any) => Promise<any>;
    findByName: (name: any) => Promise<any>;
    findByBrand: (brand: any) => Promise<any>;
    listASCPrice: () => Promise<any>;
    listDescQuantity: () => Promise<any>;
}
declare const _default: ProductService;
export default _default;
