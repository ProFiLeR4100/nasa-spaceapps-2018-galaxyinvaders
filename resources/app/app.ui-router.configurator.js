function ConfigureUIRouter ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            templateUrl: "/pages/home/home.tmpl.html",
            controller: "HomePageController",
            controllerAs: "HomePageController",
            url: '/home',
            data: {
                title: 'MAIN'
            }
        })
        .state('battle', {
            templateUrl: "/pages/battle/battle.tmpl.html",
            controller: "BattlePageController",
            controllerAs: "BattlePageController",
            url: '/battle',
            data: {
                title: 'GAME_FIELD'
            }
        })
        .state('battle-card-description', {
            templateUrl: "/pages/battle-card-description/battle-card-description.tmpl.html",
            controller: "BattleCardDescriptionPageController",
            controllerAs: "BattleCardDescriptionPageController",
            url: '/battle-card-description',
            data: {
                title: 'GAME_FIELD'
            }
        })
        .state('battle-card-test', {
            templateUrl: "/pages/battle-card-test/battle-card-test.tmpl.html",
            controller: "BattleCardTestPageController",
            controllerAs: "BattleCardTestPageController",
            url: '/battle-card-test',
            data: {
                title: 'GAME_FIELD'
            }
        })
        .state('lobby-multi', {
            templateUrl: "/pages/lobby-multi/lobby-multi.tmpl.html",
            controller: "LobbyMultiPageController",
            controllerAs: "LobbyMultiPageController",
            url: '/lobby-multi',
            data: {
                title: 'GAME_FIELD'
            }
        })
        .state('lobby-multi-second', {
            templateUrl: "/pages/lobby-multi-second/lobby-multi-second.tmpl.html",
            controller: "LobbyMultiSecondPageController",
            controllerAs: "LobbyMultiSecondPageController",
            url: '/lobby-multi-second',
            data: {
                title: 'GAME_FIELD'
            }
        })
        .state('lobby-search', {
            templateUrl: "/pages/lobby-search/lobby-search.tmpl.html",
            controller: "LobbySearchPageController",
            controllerAs: "LobbySearchPageController",
            url: '/lobby-search',
            data: {
                title: 'GAME_FIELD'
            }
        })
        .state('lobby-solo', {
            templateUrl: "/pages/lobby-solo/lobby-solo.tmpl.html",
            controller: "LobbySoloPageController",
            controllerAs: "LobbySoloPageController",
            url: '/lobby-solo',
            data: {
                title: 'GAME_FIELD'
            }
        })
        .state('registration', {
            templateUrl: "/pages/registration/registration.tmpl.html",
            controller: "RegistrationPageController",
            controllerAs: "RegistrationPageController",
            url: '/registration',
            data: {
                title: 'GAME_FIELD'
            }
        })
        .state('solo-card-description', {
            templateUrl: "/pages/solo-card-description/solo-card-description.tmpl.html",
            controller: "SoloCardDescriptionPageController",
            controllerAs: "SoloCardDescriptionPageController",
            url: '/solo-card-description',
            data: {
                title: 'GAME_FIELD'
            }
        })
        .state('solo-card-select', {
            templateUrl: "/pages/solo-card-select/solo-card-select.tmpl.html",
            controller: "SoloCardSelectPageController",
            controllerAs: "SoloCardSelectPageController",
            url: '/solo-card-select',
            data: {
                title: 'GAME_FIELD'
            }
        })
        .state('solo-card-test', {
            templateUrl: "/pages/solo-card-test/solo-card-test.tmpl.html",
            controller: "SoloCardTestPageController",
            controllerAs: "SoloCardTestPageController",
            url: '/solo-card-test',
            data: {
                title: 'GAME_FIELD'
            }
        });

    $urlRouterProvider.otherwise('/home');
}