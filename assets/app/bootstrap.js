angular
    .module(
        'application',
        [
            'application.home',
            'pascalprecht.translate',
        ]
    )
    .config( function($urlRouterProvider, $translateProvider) {
        // Routes
        $urlRouterProvider.otherwise('/');

        // Translations
        $translateProvider.useStaticFilesLoader({
            prefix: 'assets/app/languages/',
            suffix: '.json'
        });
        $translateProvider.useSanitizeValueStrategy('escaped');
        $translateProvider.preferredLanguage('en');
    })
    .controller (
        'ApplicationController',
        function ApplicationController($rootScope, $scope, $translate) {
            var vm = this;

            vm.currentLanguage = 'en';

            vm.changeLanguage = function(key) {
                vm.currentLanguage = key;

                $translate.use(vm.currentLanguage);
            };

            return vm;
        }
    )
;
