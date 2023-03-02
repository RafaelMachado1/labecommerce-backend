"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchases = exports.products = exports.users = void 0;
exports.users = [
    {
        id: '01',
        email: 'rafael@gmail.com',
        password: '123456'
    },
    {
        id: '02',
        email: 'gabriel@gmail.com',
        password: '654321'
    }
];
exports.products = [
    {
        id: "11",
        name: "Televisão",
        price: 120,
        category: "Eletro-domestico"
    },
    {
        id: "12",
        name: "Cadeira",
        price: 480,
        category: "Móveis"
    }
];
exports.purchases = [
    {
        userId: "01",
        productId: "201",
        quantity: 1,
        totalPrice: 120
    },
    {
        userId: "02",
        productId: "426",
        quantity: 1,
        totalPrice: 480
    }
];
//# sourceMappingURL=database.js.map