import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Shop from './shop/shop';
import Cart from './cart/cart';
import Detail from './detail/detail';

export const namespace = 'app.components';

angular.module('app.components', [
    Shop,
    Home,
    About,
    Cart,
    Detail
])
    .name;
