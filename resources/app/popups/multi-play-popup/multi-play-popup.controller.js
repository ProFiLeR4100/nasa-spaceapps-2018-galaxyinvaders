app.controller('MultiPlayPopupController', ['$scope', '$uibModalInstance', 'model', '$timeout', '$rootScope', '$state', MultiPlayPopupController]);

function MultiPlayPopupController($scope, $uibModalInstance, model, $timeout, $rootScope, $state) {

    $scope.model = angular.copy(model);
    $scope.stage = 'select';
    // $scope.movePage = $rootScope.movePage;
    // $scope.configureTabs = $rootScope.configureTabs;

    // $scope.override = function () {
    //     $uibModalInstance.close();
    //     naasFactory.loginCustomer($scope.model.id)
    //         .then(function (response) {
    //             customerFactory.updateSsp();
    //             $scope.movePage($scope.model.afterLoginPage, $scope.configureTabs);
    //         });
    // };

    $scope.close = function () {
        $uibModalInstance.close();
    };

    $scope.showDescription = function () {
        $scope.stage = 'description';
    };

    $scope.goToPlay = function () {
        $state.go('battle');
        $scope.close();
        // $window.location.hash = window.location.hash='#!/battle';
    };

    $scope.showTest = function () {
        $scope.stage = 'test';
    };

    $scope.showResult = function () {
        $scope.stage = 'result';
    };
}