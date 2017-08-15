import angular from 'angular';
import uiRouter from 'angular-ui-router';
import detailComponent from './detail.component';

let detailModule = angular.module('detail', [
    uiRouter
])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('detail', {
                url: '/detail/:productId',
                component: 'detail',
                params: {
                    product: null
                },
                resolve: {
                    'product': (productService, $stateParams) => {
                        "ngInject";

                        if ($stateParams.product) {
                            return $stateParams.product;
                        }

                        return productService.getProduct($stateParams.productId);
                    }
                }
            })
    })
    .component('detail', detailComponent)
    .name;

export default detailModule;
