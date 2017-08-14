
export const namespace = 'app.components.shop';

class ShopController {
    constructor($scope, $mdDialog, cartService) {
        "ngInject";
        this.products = $scope.$ctrl.products;
        this.$mdDialog = $mdDialog;
        cartService.addToCart();
    }

    toggleOptions() {
        return $mdDialog.show({

                template: require('./mealPlanSelectionDialog/mealPlanSelectionDialog.tpl.html'),
                controller: namespace + '.mealPlanSelectionDialog.controller',
                controllerAs: 'MealPlanSelectionDialogController',
                locals: {
                    mealPlans: mealPlans,
                    fullUserInfo: user
                }

                controller: shopDia,
                templateUrl: 'dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });

    }
}

export default ShopController;
