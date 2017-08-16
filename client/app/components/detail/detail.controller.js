
class DetailController {
    constructor($scope, cartService, $mdToast, $state) {
        "ngInject";
        this.product = $scope.$ctrl.product;
        this.quantity = 1;
        this.cartService = cartService;
        this.$mdToast = $mdToast;
        this.$state = $state;
    }

    appendToCart() {
        this.cartService.addToCart(this.product, this.quantity, true);
        this.$state.reload();
        this.$mdToast.show(
            this.$mdToast.simple()
                .textContent('Cart updated')
                .hideDelay(3000)
        );
    }
}

export default DetailController;
