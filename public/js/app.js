var App;
(function (App) {
    angular
        .module('app', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-jwt'])
        .config(App.configuration);
})(App || (App = {}));
