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