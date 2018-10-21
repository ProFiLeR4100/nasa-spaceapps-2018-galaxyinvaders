app.controller("LobbySoloPageController", ['$interval', '$timeout', '$rootScope', 'ConfigService', '$http', '$q', '$sce', '$element', LobbySoloPageController]);

function LobbySoloPageController($interval, $timeout, $rootScope, ConfigService, $http, $q, $sce, $element) {
    var self = this;
    self.config = {};

    self.$onInit = function () {
        // ConfigService.getConfig().then(function (json) {
        //     self.config = json.data;
        // });

        self.openPopup = function() {
            $rootScope.modal("xl", "SoloPlayPopupController", "/popups/solo-play-popup/solo-play-popup.tmpl.html", {});
        }
    };
}