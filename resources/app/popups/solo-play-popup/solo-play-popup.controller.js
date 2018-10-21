app.controller('SoloPlayPopupController', ['$scope', '$uibModalInstance', 'model', '$timeout', '$rootScope', SoloPlayPopupController]);

function SoloPlayPopupController($scope, $uibModalInstance, model, $timeout, $rootScope) {

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

    $scope.showTest = function () {
        $scope.stage = 'test';
    };

    $scope.showResult = function () {
        $scope.stage = 'result';
    };
}