import angular from 'angular';
import * as _ from 'lodash';

export const namespace = 'app.services.cart';

/**
 * A cartItem is in the format. TODO: make interface or duck typing
 * { id:1, product:{...}, quantity:1 }
 */
export default class CartService {

    constructor() {
    }

    clearCart() {
        return localStorage.removeItem('cart');
    }

    addToCart(product, quantity, append) {
        var cartItems = this.retrieveCart();
        var storedCartItem = this.retrieveItemFromCart(product);

        if (storedCartItem) {
            // Exists in cart already, remove, update quantity and put back in
            _.remove(cartItems, { 'id': product.id });

            // Can add to previous item quantity or rewrite item quantity
            if (append) {
                storedCartItem.quantity = storedCartItem.quantity + quantity;
            } else {
                storedCartItem.quantity = quantity;
            }

            cartItems.push(storedCartItem);
        } else {
            // New cart item
            cartItems.push({id:product.id, product:product, quantity:quantity});
        }

        // Save cart
        var storedCart = JSON.stringify(cartItems);
        localStorage.setItem('cart', storedCart);
    }

    removeFromCart(product) {
        var cartItems = this.retrieveCart();
        _.remove(cartItems, { 'id': product.id });
        var storedCart = JSON.stringify(cartItems);
        localStorage.setItem('cart', storedCart);
    }

    retrieveCart() {
        let cart = localStorage.getItem('cart');
        if (!cart) {
            return null;
        } else {
            return JSON.parse(cart);
        }
    }

    retrieveItemFromCart(product) {
        var cartItems = this.retrieveCart();
        return _.find(cartItems, { 'id': product.id });
    }

}

angular.module(namespace, [])
    .service('cartService', CartService);