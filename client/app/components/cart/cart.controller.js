class CartController {
    constructor(cartService, $mdToast) {
        "ngInject";
        this.cartService = cartService;
        this.cartItems = cartService.retrieveCart();
        this.$mdToast = $mdToast;
    }

    removeFromCart(product) {
        this.cartService.removeFromCart(product);
        this.cartItems = this.cartService.retrieveCart();
    }

    cartTotal() {
        var total = _.reduce(this.cartItems, (sum, cartItem) => {
            return sum + (cartItem.product.price * cartItem.quantity);
        }, 0);
        return total;
    }

    cartItemPrice(cartItem) {
        return cartItem.quantity * cartItem.product.price;
    }

    updateCart() {
        _.map(this.cartItems, (cartItem) => {
            this.cartService.addToCart(cartItem.product, cartItem.quantity, false);
        });
        this.$mdToast.show(
            this.$mdToast.simple()
                .textContent('Cart updated')
                .hideDelay(3000)
        );
    }
}

export default CartController;
