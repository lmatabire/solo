var App;
(function (App) {
    var View;
    (function (View) {
        var Home;
        (function (Home) {
            var HomeController = (function () {
                function HomeController($http, $state, jwtHelper, $rootScope) {
                    var _this = this;
                    this.$http = $http;
                    this.$state = $state;
                    this.jwtHelper = jwtHelper;
                    this.$rootScope = $rootScope;
                    this.editUser = function (id) {
                        console.log("preesdded");
                        this.$state.go('edit', { id: id });
                    };
                    this.$http.get('/users').then(function (response) {
                        _this.users = response.data;
                    });
                    console.log(getRole(jwtHelper, $state, $rootScope));
                }
                return HomeController;
            }());
            Home.HomeController = HomeController;
        })(Home = View.Home || (View.Home = {}));
    })(View = App.View || (App.View = {}));
})(App || (App = {}));
