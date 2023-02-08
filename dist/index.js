"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const cors_1 = __importDefault(require("cors"));
const product_router_1 = __importDefault(require("./src/router/product.router"));
const data_source_1 = require("./src/data-source");
data_source_1.AppDataSource.initialize().then(() => {
    console.log('Data connection');
});
app.use((0, cors_1.default)());
app.use('', product_router_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=index.js.map