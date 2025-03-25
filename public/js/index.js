"use strict";
class Product {
    constructor(id, name, price, quantity) {
        if (!id || !name || !price || !quantity) {
            throw new Error("Product must have id, name, price and quantity");
        }
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
class Cart {
    constructor(id, products) {
        this.products = [];
        if (!id || !products) {
            throw new Error("Cart must have id and products");
        }
        this.id = id;
        this.products = products;
        this.total = products.reduce((total, product) => total + (product.price * product.quantity), 0);
    }
    addProduct(product) {
        this.products.push(product);
        this.updateTotal();
    }
    removeProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId);
        this.updateTotal();
    }
    getTotal() {
        return this.total;
    }
    updateTotal() {
        this.total = this.products.reduce((total, product) => total + (product.price * product.quantity), 0);
    }
}
const product1 = new Product("789698523", "Product 1", 15, 1);
const product2 = new Product("789698526", "Product 2", 35.22, 2);
/**
 * Cria carrinho com 2 produtos e mostra o total do carrinho
 */
const cart = new Cart("cart-hash", [
    product1,
    product2
]);
console.log('Cart Total => ', cart.getTotal());
/**
 * Adiciona um novo produto e mostra o total do carrinho atualizado
 */
const product3 = new Product("789698529", "Product 3", 50, 3);
cart.addProduct(product3);
console.log('Added Product');
console.log('Cart Total => ', cart.getTotal());
/**
 * Remove todos um produto do carrinho e mostra o total do carrinho atualizado
 */
cart.removeProduct(product1.id);
console.log('Removed Product');
console.log('Cart Total => ', cart.getTotal());
/**
 * Remove todos os produtos do carrinho e mostra o total do carrinho atualizado
 */
cart.removeProduct(product2.id);
cart.removeProduct(product3.id);
console.log('Removed All Products');
console.log('Cart Total => ', cart.getTotal());
