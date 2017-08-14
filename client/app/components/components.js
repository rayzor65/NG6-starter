import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Shop from './shop/shop';
import Cart from './cart/cart';

export const namespace = 'app.components';

angular.module('app.components', [
    Home,
    About,
    Shop,
    Cart
])
    .name;
