CREATE DATABASE tokko;

CREATE TABLE product(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    stock INT NOT NULL,
    price INT NOT NULL,
    category_id INT REFERENCES category (id),
    transaksi_id INT REFERENCES transaksi (id)
);
CREATE TABLE category(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL
);

CREATE TABLE transaksi(
    id SERIAL PRIMARY KEY,
    adress VARCHAR NOT NULL,
    transaksi_detail_id INT REFERENCES transaksi_detail (id)
);

CREATE TABLE transaksi_detail(
    id SERIAL PRIMARY KEY,
    total INT NOT NULL,
    payment_id INT REFERENCES payment(id)
);

CREATE TABLE payment(
    id SERIAL PRIMARY KEY,
    amount INT NOT NULL
);

DROP TABLE product CASCADE;

SELECT * FROM category;

SELECT * FROM category WHERE id=1;

SELECT product.name,product.stock,product.price,category.name as category
FROM product
INNER JOIN category
ON product.category_id = category.id;

INSERT INTO category(id,name) VALUES(1,’kursi’);

INSERT INTO category(name) VALUES(’kursi’);

UPDATE category SET name ='furniture' WHERE id=1;

DELETE FROM category WHERE id=1;