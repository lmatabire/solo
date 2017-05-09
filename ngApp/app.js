var app;
(function (app) {
    angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: app.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('about', {
            url: '/about/:id',
            templateUrl: '/ngApp/views/about.html',
            controller: app.Controllers.AboutController,
            controllerAs: 'controller'
        })
            .state('edit', {
            url: '/edit/:id',
            templateUrl: '/ngApp/views/editUser.html',
            controller: app.Controllers.EditUserController,
            controllerAs: 'controller'
        })
            .state('login', {
            url: '/login',
            templateUrl: 'ngApp/views/login.html',
            controller: app.Controllers.LoginController,
            controllerAs: 'controller'
        })
            .state('register', {
            url: '/register',
            templateUrl: '/ngApp/views/register.html',
            controller: app.Controllers.RegisterController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(app || (app = {}));
