
export const namespace = 'app.components.shop';

class ShopController {
    constructor($scope, $mdDialog) {
        "ngInject";
        this.products = $scope.$ctrl.products;
        this.$mdDialog = $mdDialog;
    }

    toggleOptions($event, product) {
        return this.$mdDialog.show({
                targetEvent: $event,
                template: require('./shopDialog/shopDialog.html'),
                controller: namespace + '.shopDialog.controller',
                controllerAs: 'ShopDialogController',
                locals: {
                    product: product
                },
                clickOutsideToClose:true,
                fullscreen: false,
                openFrom: '#product'+product.id
            })
                .then(function() {
                    // console.log('successful hide show');
                }, function() {
                    // console.log('dialog cancelled');
                });

    }
}

export default ShopController;
