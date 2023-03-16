import { users, products, purchases } from "./database";
import { TUser, TProduct, TPurchase } from "./types";
import { CATEGORIES } from "./types";

// APIs e EXPRESS EXERCÍCIO 1 
// Configure seu servidor node com express para que ele inicie com o script de start.
import express, {Request, Response} from 'express';
import cors from 'cors'; //import do CORS

const app = express();//criação do servidor express
app.use(express.json()); //configuração do middleware que garante que nossas respostas estejam sempre no formato json
app.use(cors());//configuração do middleware que habilita o CORS
//colocando nosso servidor para escutar a porta 3003 da nossa máquina (primeiro 
//parâmetro da função listen)
//a função de callback (segundo parâmetro da função listen) serve para sabermos 
//que o servidor está de pé, através do console.log que imprimirá a mensagem no 
//terminal
app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response)=>{ //Utilizamos o app, escolhemos o método get, indicamos o path ‘/ping’ 
    res.send('Pong!')
})

//EXERCÍCIO 2 
// EndPoint Get sem query usado para buscar dados, nesse caso busca de todos os users
app.get('/users', (req:Request, res: Response)=>{
    res.status(200).send(users)
})

//Endpoint Get sem query usado para buscar dados, nesse caso busca de todos os produtos
app.get('/products',(req:Request, res: Response)=>{
    res.status(200).send(products)
})

//Endpoint Get com query que Possibilita a busca por parte de um recurso através de consultas.
app.get("/product/search", (req:Request, res: Response)=>{
    const q = req.query.q as string

    const result = products.filter((product)=>{
        return product.name.toLowerCase().includes(q.toLowerCase())
    })

    res.status(200).send(result)
})

// EXERCÍCIO 3
//Endpoint usado para criar um novo recurso, nesse caso um novo usário
app.post("/users", (req:Request, res: Response)=>{
    const {id, email, password} = req.body as TUser

    const newUser = {
        id,
        email,
        password
    }

    users.push(newUser)
    res.status(201).send("Cadastro realizado com sucesso")
})

//Endpoint usado para criar um novo recurso, nesse caso um novo produto
app.post("/products", (req:Request, res: Response)=>{
    const {id, name, price, category} = req.body as TProduct

    const newProduct = {
        id: id,
        name: name,
        price: price,
        category: category
    }

    products.push(newProduct)
    res.status(201).send("Produto criado com sucesso")
})

//Endpoint usado para criar um novo recurso, nesse caso uma nova compra
app.post("/purchases", (req:Request, res: Response)=>{
    const {userId, productId, quantity, totalPrice} = req.body as TPurchase
    const newPurchase: TPurchase = {
        userId: userId,
        productId: productId,
        quantity: quantity,
        totalPrice: totalPrice
    }

    purchases.push(newPurchase)
    res.status(201).send("Compra realizada com sucesso")
})

//--------------------------------------------------------------------------------------
//  APROFUNDAMENTO EXPRESS
// EXERCÍCIO 1 
// Esse tipo de endpoint é utilizado para acessar um recurso específico
app.get("/products/:id", (req:Request, res: Response)=>{
    const id = req.params.id

    const result = products.filter((product)=>{
        return product.id === id       
    })
    res.status(200).send(result)
})

app.get("/users/:id/purchases", (req:Request, res: Response)=>{
    const id = req.params.id

    const result = purchases.filter((purchase)=>{
        return purchase.userId.toLowerCase().includes(id.toLowerCase())
    })
    res.status(200).send(result)
})



// EXERCÍCO 2 Agora vamos praticar o método DELETE
// É utilizado para remover um recurso específico. Também utiliza path params para identificar o item a ser deletado.
app.delete("/user/:id", (req:Request, res: Response)=>{
    const id = req.params.id

    const userIndex = users.findIndex((user)=>{
        return user.id === id
    })

    if(userIndex >=0){
        users.splice(userIndex, 1)
        res.status(200).send("Usuário excluído com sucesso")
    }else{
        res.status(404).send("Usuário não encontrado")
    }
})

app.delete("/product/:id", (req:Request, res: Response)=>{
    const id = req.params.id

    const productIndex = products.findIndex((product)=>{
        return product.id === id
    })

    if(productIndex >=0){
        products.splice(productIndex, 1)
        res.status(200).send("Produto excluído com sucesso")
    }else{
        res.status(404).send("Produto não encontrado")
    }
})

// EXERCÍCIO 3 Agora vamos praticar o método PUT
// Esse tipo de endpoint é utilizado para atualizar (editar) um recurso específico já existente.
app.put("/user/:id", (req:Request, res: Response)=>{
    const id = req.params.id

    const newId = req.body.id as string | undefined
    const newEmail = req.body.email as string | undefined
    const newPassword = req.body.password as string | undefined

    const userToEdit = users.find((user)=>{
        return user.id === id
    })

    if(userToEdit){
        userToEdit.id = newId || userToEdit.id
        userToEdit.email = newEmail || userToEdit.email
        userToEdit.password = newPassword || userToEdit.password
        res.status(200).send("Cadastro atualizado com sucesso")
    }else{
        res.status(404).send("Usuário não encontrado")
    }
})

app.put("/product/:id", (req:Request, res: Response)=>{
    const id = req.params.id

    const newId = req.body.id as string | undefined
    const newName = req.body.name as string | undefined
    const newPrice = req.body.price as number | undefined
    const newCategory = req.body.category as CATEGORIES | undefined

    const product = products.find((product)=>{
        return product.id === id
    })

    if(product){
        product.id = newId || product.id
        product.name = newName || product.name
        product.price = isNaN(newPrice) ? product.price : newPrice
        product.category = newCategory || product.category
        res.status(200).send("Cadastro atualizado com sucesso")
    }else{
        res.status(404).send("Usuário não encontrado")
    }
})
