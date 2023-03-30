-- Active: 1680039366114@@127.0.0.1@3306

CREATE TABLE
    users (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );

SELECT * FROM users;

INSERT INTO
    users (id, email, password)
VALUES (
        '01',
        'rafael@email.com',
        "123456"
    ), (
        '02',
        'gabriel@email.com',
        "123456"
    ), (
        '03',
        'lana@email.com',
        "123456"
    );

CREATE TABLE
    products (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        price REAL NOT NULL,
        category TEXT NOT NULL
    );

INSERT INTO
    products (id, name, price, category)
VALUES (
        '01',
        'Camisa',
        100,
        'Roupas e Calçados'
    ), (
        '02',
        'sapato',
        120,
        'Roupas e Calçados'
    ), ('101', 'Cadeira', 280, 'móveis'), ('102', 'mesa', 359, 'móveis'), (
        '201',
        'tablet',
        1200,
        'eletrônicos'
    ), (
        '202',
        'Celular',
        3489,
        'eletrônicos'
    );

SELECT * FROM products;

-- Exercício 1

-- Get All Users

SELECT * FROM users;

-- Retorna todos os usuários cadastrados

-- Get All Products

SELECT * FROM products;

-- retorna todos os produtos cadastrados

-- Search Product by name

-- mocke um termo de busca, por exemplo "monitor"

-- retorna o resultado baseado no termo de busca

SELECT * FROM products WHERE name = "camisa";

--retorna o resultado baseado no termo de busca

-- Create User

--mocke um novo usuário

-- insere o item mockado na tabela users

INSERT INTO
    users(id, email, password)
VALUES (
        '04',
        'davi@email.com',
        '123456'
    );

-- Create Product

-- mocke um novo produto

-- insere o item mockado na tabela products

INSERT INTO
    products(id, name, price, category)
VALUES (
        '203',
        'Notebook',
        4250.90,
        'eletrônicos'
    );

-- Exercício 2

-- Get Products by id

-- mocke uma id

-- busca baseada no valor mockado

SELECT * FROM products WHERE id = '203';

-- Delete User by i

-- mocke uma id

-- delete a linha baseada no valor mockado

DELETE FROM users WHERE id = '04';

-- Delete Product by id

-- mocke uma id

-- delete a linha baseada no valor mockado

DELETE FROM products WHERE id = '203';

-- Edit User by id

-- mocke valores para editar um user

-- edite a linha baseada nos valores mockados

UPDATE users SET email = 'fulano@email.com' WHERE id = '01';

-- Edit Product by id

-- mocke valores para editar um product

-- edite a linha baseada nos valores mockados

UPDATE products SET price = 129.99 WHERE id = '01';

-- Exercício 3

-- Get All Users REFATORADO (retorna o resultado ordenado pela coluna email em ordem crescente)

SELECT * FROM users ORDER BY email ASC;

-- Get All Products versão 1 REFATORADO

-- (retorna o resultado ordenado pela coluna price em ordem crescente)

-- (limite o resultado em 20 iniciando pelo primeiro item)

SELECT * FROM products ORDER BY price ASC LIMIT 20 OFFSET 0;

-- Get All Products versão 2 REFATORADO

-- (mocke um intervalo de preços, por exemplo entre 100.00 e 300.00)

-- (retorna os produtos com preços dentro do intervalo mockado em ordem crescente)

SELECT *
FROM products
WHERE price >= 120 AND price <= 500
ORDER BY price ASC;