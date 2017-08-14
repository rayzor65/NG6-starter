import angular from 'angular';

export const namespace = 'app.services.cart';

export default class CartService {

    constructor() {

    }

    addToCart()
    {
        localStorage.setItem('test1', 'test2');
        console.log(localStorage.getItem('test1'));
        // localStorage.setItem(this.getSavedCheckoutKey(key), JSON.stringify(savedCheckoutData));
    }

}

angular.module(namespace, [])
    .service('cartService', CartService);