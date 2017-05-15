var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var LoginController = (function () {
            function LoginController($http, $state, $window) {
                this.$http = $http;
                this.$state = $state;
                this.$window = $window;
            }
            LoginController.prototype.login = function () {
                var _this = this;
                console.log("loging in...", this.user);
                this.$http.post('/users/login', this.user).then(function (response) {
                    var token = response.data['token'];
                    console.log("token is:", token);
                    _this.$window.localStorage.token = JSON.stringify(token);
                    _this.$state.go('home');
                }, function (error) {
                    console.log("login failed:", error);
                });
            };
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
