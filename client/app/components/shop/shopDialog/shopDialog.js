
export const namespace = 'app.components.shop.shopDialog';

class ShopDialogController {
    constructor($scope) {
        "ngInject";
        console.log('shop dialog controller');
    }


}

angular.module(namespace, [])
    .controller(namespace + '.controller', ShopDialogController)
