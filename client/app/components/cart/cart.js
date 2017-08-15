import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cartComponent from './cart.component';

let cartModule = angular.module('cart', [
  uiRouter
])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('cart', {
                url: '/cart',
                component: 'cart',
            })
    })
  .component('cart', cartComponent)

  .name;

export default cartModule;
