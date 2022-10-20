CREATE DATABASE "LaBoleria";

CREATE TABLE "cakes" (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
    price NUMERIC NOT NULL,
    image VARCHAR NOT NULL,
    description TEXT
);

CREATE TABLE "clients" (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    phone VARCHAR(11) NOT NULL
);

CREATE TABLE "orders" (
	id SERIAL PRIMARY KEY,
	"clientId" INTEGER REFERENCES "clients"("id"),
    "cakeId" INTEGER REFERENCES "cakes"("id"),
    quantity INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP DEFAULT NOW(),
    "totalPrice" NUMERIC NOT NULL DEFAULT 0
);