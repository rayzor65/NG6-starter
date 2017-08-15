
export const namespace = 'app.components.shop.shopDialog';

class ShopDialogController {
    constructor($scope, $state, product, $mdDialog, cartService, $mdToast) {
        "ngInject";
        this.product = product;
        this.$state = $state;
        this.$mdDialog = $mdDialog;
        this.cartService = cartService;
        this.$mdToast = $mdToast;
    }

    goToProduct() {
        this.$mdDialog.hide();
        return this.$state.go('detail', {productId:this.product.id, product:this.product});
    }

    quickAddToCart() {
        this.cartService.addToCart(this.product, 1);
        this.$mdToast.show(
            this.$mdToast.simple()
                .textContent('Added to cart')
                .hideDelay(3000)
        );
        this.$mdDialog.hide();
    }
}

angular.module(namespace, [])
    .controller(namespace + '.controller', ShopDialogController);
