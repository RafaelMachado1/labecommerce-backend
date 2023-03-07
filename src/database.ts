import { CATEGORIES, TUser } from "./types" //EXERCÍCIO 1
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
        password: '123456'
    },
]

export const products: TProduct[] = [
    {
        id: "001",
        name: "Camisa",
        price: 120,
        category: CATEGORIES.CLOTHES_AND_SHOES //EXERCÍCIO 1
    },
    {
        id: "101",
        name: "Cadeira",
        price: 250,
        category: CATEGORIES.MOVEIS // EXERCÍCIO 1
    },
]

export const purchases: TPurchase[] = [
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
]

//  EXERCÍCIO 2
/*User
createUser (cria uma nova pessoa na lista de users)
    input: três parâmetros (id, email e password)
    output: frase de sucesso ("Cadastro realizado com sucesso")
    exemplo de chamada: createUser("u003", "beltrano@email.com", "beltrano99") */

export function createUser(id: string, email: string, password: string): void {
    const newUser: TUser = {
        id: id,
        email: email,
        password: password
    }
    users.push(newUser)
    console.log("Cadastro realizado com sucesso (createUser)")
}
/*getAllUsers (busca todas as pessoas da lista de users)
    input: nenhum
    output: lista atualizada de users
exemplo de chamada: getAllUsers()*/
export function getAllUsers(): TUser[] {
    return users
}



/*Product
createProduct (cria um novo produto na lista de products)
    input: quatro parâmetros (id, name, price e category)
    output: frase de sucesso ("Produto criado com sucesso")
exemplo de chamada: createProduct("p004", "Monitor HD", 800, PRODUCT_CATEGORY.ELECTRONICS) */
export function createProduct(id: string, name: string, price: number, category: CATEGORIES): void {
    const newProduct: TProduct = {
        id: id,
        name: name,
        price: price,
        category: category
    }
    products.push(newProduct)
    console.log("Produto criado com sucesso (createProduct)")
}
/*getAllProducts (busca todos os produtos da lista de products)
    input: nenhum
    output: lista atualizada de products
exemplo de chamada: getAllProducts() */
export function getAllProducts(): TProduct[] {
    return products
}

/*getProductById (busca por produtos baseado em um id da lista de products)
    input: um parâmetro (idToSearch)
    output: o produto encontrado ou undefined
exemplo de chamada: getProductById("p004") */
export function getProductById(productId: string): TProduct[] | undefined {
    return products.filter((product) => {
        return product.id === productId
    })
}



//EXERCÍCIO 3
export function queryProductsByName(q: string): void {
    const query = products.filter((product)=>{
        return product.name.toLowerCase().includes(q.toLowerCase())
    })
    console.table(query)
}

export function createPurchase(userId: string, productId: string, quantity: number, totalPrice: number): void {
    const newPurchase: TPurchase = {
        userId: userId,
        productId: productId,
        quantity: quantity,
        totalPrice: totalPrice
    }
    purchases.push(newPurchase)
    console.log("Compra realizada com sucesso")
    console.table(newPurchase)
}

export function getAllPurchasesFromUserId(userIdToSearch: string):TPurchase[] {
    return purchases.filter((purchase)=>{
        return purchase.userId.toLowerCase().includes(userIdToSearch.toLowerCase())
    })
    
}