import { TUser } from "./types"
import { TProduct } from "./types"
import { TPurchase } from "./types"

export const users: TUser[] = [
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

]

export const products: TProduct[] = [
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

]

export const purchases: TPurchase[] = [
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

]