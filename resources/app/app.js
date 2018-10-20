var app = angular.module("NasaSpaceApps", [/*"ngPatternRestrict", */"pascalprecht.translate", "ngSanitize", "ui.bootstrap", /*"ngLodash", */"ngCookies", "ui.router", /*"angular.filter", */"app.templates"]);

if(!Array.prototype.chunk) {
    Array.prototype.chunk = function(groupsize){
        var sets = [];
        var chunks = this.length / groupsize;

        for (var i = 0, j = 0; i < chunks; i++, j += groupsize) {
            sets[i] = this.slice(j, j + groupsize);
        }

        return sets;
    };
}

app
    .config(['$httpProvider', '$translateProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $translateProvider, $stateProvider, $urlRouterProvider) {
        ConfigureTranslate($translateProvider);
        ConfigureUIRouter($stateProvider, $urlRouterProvider);
    }])
    .run(['$rootScope', '$document', '$timeout', 'ConfigService', '$state', function($rootScope, $document, $timeout, ConfigService, $state) {
        $rootScope.$watch(function() {
            return $state.current;
        }, function() {
            $rootScope.state = $state.current;
            if(!!$state.current.data)
                $rootScope.title = $state.current.data.title;
        });
    }]);
    
    
    