import angular from 'angular';
import {namespace as productService} from "./productService/productService";
import {namespace as cartService} from "./cartService/cartService";

export const namespace = 'app.services';

angular.module(namespace, [
    productService,
    cartService
]);