import angular from 'angular';
import uiRouter from 'angular-ui-router';
import shopComponent from './shop.component';
import {namespace as shopDialog} from "./shopDialog/shopDialog";

let shopModule = angular.module('shop', [
    uiRouter,
    shopDialog
])

    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('shop', {
                url: '/shop',
                component: 'shop',
                resolve: {
                    'products': (productService) => {
                        "ngInject";
                        return productService.getProducts();
                    }
                }
            });
    })

    .component('shop', shopComponent)

    .name;

export default shopModule;
