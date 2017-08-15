import angular from 'angular';
import * as _ from "lodash";

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
            return response.data;
        }, function errorCallback(response) {
            console.log(response);
        });
    }

    getProduct(id) {
        return this.$http({
            method: 'GET',
            url: 'json/products.json'
        }).then(function successCallback(response) {
            return _.find(response.data, { 'id': id });
        }, function errorCallback(response) {
            console.log(response);
        });
    }
}

angular.module(namespace, [])
    .service('productService', ProductService);