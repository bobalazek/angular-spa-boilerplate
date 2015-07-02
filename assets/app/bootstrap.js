angular
    .module(
        'application',
        [
            'application.home',
        ]
    )
    .config( function($urlRouterProvider) {
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
