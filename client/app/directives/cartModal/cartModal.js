import angular from 'angular';

export const namespace = 'app.directives.cartModal';

export default class CartModal {

    constructor(cartService) {
        "ngInject";
        this.cartItems = cartService.retrieveCart();
        this.cartService = cartService;
    }

    removeFromCart(product) {
        this.cartService.removeFromCart(product);
        this.cartItems = this.cartService.retrieveCart();
    }

}

angular.module(namespace, [])
    .directive('cartModal', () => {
        return {
            template: require('./cartModal.html'),
            controller: CartModal,
            link: function(scope, element, attributes, ctrl){
                scope.cartItems = ctrl.cartItems;
                scope.removeFromCart = ctrl.removeFromCart;
                scope.cartService = ctrl.cartService;
            },
        };
    });