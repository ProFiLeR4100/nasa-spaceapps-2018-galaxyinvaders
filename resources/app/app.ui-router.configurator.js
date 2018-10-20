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
        });

    $urlRouterProvider.otherwise('/home');
}