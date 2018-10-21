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
        .state('game-field', {
            templateUrl: "/pages/game-field/game-field.tmpl.html",
            controller: "GameFieldPageController",
            controllerAs: "GameFieldPageController",
            url: '/game-field',
            data: {
                title: 'GAME_FIELD'
            }
        });

    $urlRouterProvider.otherwise('/home');
}