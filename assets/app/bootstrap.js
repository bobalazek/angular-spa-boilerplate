angular
    .module(
        'application',
        [
            'ngAnimate',
            'ngCookies',
            'ui.router',
            'ui.bootstrap',
            'application.home',
        ]
    )
    .config( function($urlRouterProvider, $stateProvider) {
        // Routes
        $urlRouterProvider.otherwise('/');
    })
    .controller (
        'ApplicationController',
        function ApplicationController($rootScope, $scope) {
            var vm = this;
        }
    )
;
