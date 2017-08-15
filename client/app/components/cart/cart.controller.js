class CartController {
    constructor(cartService) {
        "ngInject";
        this.cartService = cartService;
        this.cartItems = cartService.retrieveCart();
    }

    removeFromCart(product) {
        this.cartService.removeFromCart(product);
        this.cartItems = this.cartService.retrieveCart();
    }
}

export default CartController;
