"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "2002",
    database: "test_module_4",
    entities: ["dist/src/model/*.js"],
    synchronize: false,
});
//# sourceMappingURL=data-source.js.map