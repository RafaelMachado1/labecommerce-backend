"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductById = exports.getAllProducts = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchases = exports.products = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
    {
        id: '01',
        email: 'rafael@gmail.com',
        password: '123456'
    },
    {
        id: '02',
        email: 'gabriel@gmail.com',
        password: '123456'
    },
];
exports.products = [
    {
        id: "001",
        name: "Camisa",
        price: 120,
        category: types_1.CATEGORIES.CLOTHES_AND_SHOES
    },
    {
        id: "101",
        name: "Cadeira",
        price: 250,
        category: types_1.CATEGORIES.MOVEIS
    },
];
exports.purchases = [
    {
        userId: "01",
        productId: "001",
        quantity: 1,
        totalPrice: 120
    },
    {
        userId: "02",
        productId: "101",
        quantity: 1,
        totalPrice: 250
    },
];
function createUser(id, email, password) {
    const newUser = {
        id: id,
        email: email,
        password: password
    };
    exports.users.push(newUser);
    console.log("Cadastro realizado com sucesso (createUser)");
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    const newProduct = {
        id: id,
        name: name,
        price: price,
        category: category
    };
    exports.products.push(newProduct);
    console.log("Produto criado com sucesso (createProduct)");
}
exports.createProduct = createProduct;
function getAllProducts() {
    return exports.products;
}
exports.getAllProducts = getAllProducts;
function getProductById(productId) {
    return exports.products.filter((product) => {
        return product.id === productId;
    });
}
exports.getProductById = getProductById;
function queryProductsByName(q) {
    const query = exports.products.filter((product) => {
        return product.name.toLowerCase().includes(q.toLowerCase());
    });
    console.table(query);
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantity, totalPrice) {
    const newPurchase = {
        userId: userId,
        productId: productId,
        quantity: quantity,
        totalPrice: totalPrice
    };
    exports.purchases.push(newPurchase);
    console.log("Compra realizada com sucesso");
    console.table(newPurchase);
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userIdToSearch) {
    return exports.purchases.filter((purchase) => {
        return purchase.userId.toLowerCase().includes(userIdToSearch.toLowerCase());
    });
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map