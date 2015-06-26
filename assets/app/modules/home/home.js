angular
    .module(
        'application.home',
        [
            'ui.router',
            'ui.bootstrap',
        ]
    )
    .config( function($stateProvider) {
        $stateProvider
            .state('home', {
                url : '/',
                templateUrl : 'assets/app/modules/home/home.tpl.html'
            })
        ;
    })
    .controller (
        'HomeController',
        function HomeController($rootScope, $scope) {
            var vm = this;
        }
    )
;
