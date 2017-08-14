import angular from 'angular';

export const namespace = 'app.services.product';

export default class ProductService {

    constructor($http) {
        "ngInject";
        this.$http = $http;
    }

    getProducts() {
        return this.$http({
            method: 'GET',
            url: 'json/products.json'
        }).then(function successCallback(response) {
            console.log(response);
            return response.data;
        }, function errorCallback(response) {
            console.log(response);
        });
    }

}

angular.module(namespace, [])
    .service('productService', ProductService);