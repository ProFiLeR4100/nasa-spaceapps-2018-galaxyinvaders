app.controller("LobbyMultiPageController", ['$interval', '$timeout', '$rootScope', 'ConfigService', '$http', '$q', '$sce', '$element', LobbyMultiPageController]);

function LobbyMultiPageController($interval, $timeout, $rootScope, ConfigService, $http, $q, $sce, $element, donationWidgetService) {
    var self = this;
    self.config = {};

    self.$onInit = function () {
        self.openPopup = function() {
            $rootScope.modal("xl", "MultiPlayPopupController", "/popups/multi-play-popup/multi-play-popup.tmpl.html", {});
        }
    };
}