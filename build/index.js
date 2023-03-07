"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const database_2 = require("./database");
const types_1 = require("./types");
console.table([database_1.users, database_1.products, database_1.purchases]);
(0, database_2.createUser)("03", "daniel@email.com", "123456");
console.table((0, database_2.getAllUsers)());
(0, database_2.createProduct)("201", "Celular", 900, types_1.CATEGORIES.ELETRONICOS);
console.table((0, database_2.getAllProducts)());
console.log((0, database_2.getProductById)("001"));
(0, database_2.queryProductsByName)('Celular');
(0, database_2.createPurchase)("03", "201", 1, 110);
console.table((0, database_2.getAllPurchasesFromUserId)("03"));
//# sourceMappingURL=index.js.map