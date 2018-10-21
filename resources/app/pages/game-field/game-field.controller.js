app.controller("GameFieldPageController", ['$interval', '$timeout', '$rootScope', 'ConfigService', '$http', '$q', '$sce', '$element', GameFieldPageController]);

function GameFieldPageController($interval, $timeout, $rootScope, ConfigService, $http, $q, $sce, $element, donationWidgetService) {
    var self = this;
    self.config = {};

    self.$onInit = function () {
        ConfigService.getConfig().then(function (json) {
            self.config = json.data;
        });
    };
}