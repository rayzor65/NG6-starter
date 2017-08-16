import angular from 'angular';
import {namespace as cartModal} from "./cartModal/cartModal";

export const namespace = 'app.directives';

angular.module(namespace, [
    cartModal
]);