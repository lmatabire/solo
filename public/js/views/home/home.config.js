var App;
(function (App) {
    var View;
    (function (View) {
        var Home;
        (function (Home) {
            function configuration($stateProvider) {
                $stateProvider
                    .state('home', {
                    url: '/',
                    templateUrl: '/ngApp/views/home.html',
                    controller: app.Controllers.HomeController,
                    controllerAs: 'controller'
                });
            }
            Home.configuration = configuration;
        })(Home = View.Home || (View.Home = {}));
    })(View = App.View || (App.View = {}));
})(App || (App = {}));
