app.controller("LobbySoloPageController", ['$interval', '$timeout', '$rootScope', 'ConfigService', '$http', '$q', '$sce', '$element', LobbySoloPageController]);

function LobbySoloPageController($interval, $timeout, $rootScope, ConfigService, $http, $q, $sce, $element, donationWidgetService) {
    var self = this;
    self.config = {};

    self.$onInit = function () {
        ConfigService.getConfig().then(function (json) {
            self.config = json.data;
        });

        function openPopup() {
            $rootScope.modal("xl", "AssistancePopupController", $scope.assistancePopupPath, {
                afterLoginPage: $scope.afterLoginPage,
                id: id
            });
        }
    };
}