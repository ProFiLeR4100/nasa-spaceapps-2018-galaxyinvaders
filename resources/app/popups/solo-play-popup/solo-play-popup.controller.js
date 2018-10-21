app.controller('SoloPlayPopupController', ['$scope', '$uibModalInstance', 'model', '$timeout', '$rootScope', SoloPlayPopupController]);

function SoloPlayPopupController($scope, $uibModalInstance, model, $timeout, $rootScope) {

    $scope.model = angular.copy(model);
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
}