var App;
(function (App) {
    var View;
    (function (View) {
        var Home;
        (function (Home) {
            angular
                .module('view.home', [])
                .config(Home.configuration)
                .controller('HomeController', Home.HomeController);
        })(Home = View.Home || (View.Home = {}));
    })(View = App.View || (App.View = {}));
})(App || (App = {}));
