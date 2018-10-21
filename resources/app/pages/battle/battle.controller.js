app.controller("BattlePageController", ['$interval', '$timeout', '$rootScope', 'ConfigService', '$http', '$q', '$sce', '$element', BattlePageController]);

function BattlePageController($interval, $timeout, $rootScope, ConfigService, $http, $q, $sce, $element, donationWidgetService) {
    var self = this;
    self.config = {};

    self.$onInit = function () {
        ConfigService.getConfig().then(function (json) {
            self.config = json.data;
        });
    };
}