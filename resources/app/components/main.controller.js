app.controller("MainController", ['$interval', '$timeout', '$rootScope', 'ConfigService', '$http', '$q', '$sce', '$element', MainController]);

function MainController($interval, $timeout, $rootScope, ConfigService, $http, $q, $sce, $element, donationWidgetService) {
    var self = this;

    self.$onInit = function () {
        self.rootScope = $rootScope;
        console.log(self.rootScope);
    };
}