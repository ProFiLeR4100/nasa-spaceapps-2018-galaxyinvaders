app.controller("BattlePageController", ['$interval', '$timeout', '$rootScope', 'ConfigService', '$http', '$q', '$sce', '$element', BattlePageController]);

function BattlePageController($interval, $timeout, $rootScope, ConfigService, $http, $q, $sce, $element, donationWidgetService) {
    var self = this;
    self.config = {};

    self.$onInit = function () {
        ConfigService.getConfig().then(function (json) {
            self.config = json.data;
        });

        self.$onInit = function () {
        };

        $timeout(function () {
            self.enemySelected = true;
        }, 2000);
    };

    self.openPopup = function() {
        $timeout(function () {
            $rootScope.modal("xl", "MultiPlayGamePopupController", "/popups/multi-play-game-popup/multi-play-game-popup.tmpl.html", {});
        }, 500);
    };
}