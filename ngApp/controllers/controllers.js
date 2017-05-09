var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController($http, $state) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                this.editUser = function (id) {
                    console.log("preesdded");
                    this.$state.go('edit', { id: id });
                };
                this.$http.get('/users').then(function (response) {
                    _this.users = response.data;
                });
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var PatientVisitController = (function () {
            function PatientVisitController($http, $state) {
                this.$http = $http;
                this.$state = $state;
            }
            PatientVisitController.prototype.createVisit = function () {
                var _this = this;
                console.log("Saving...", this.patientVisit);
                this.$http.post('/users/register', this.patientVisit).then(function (response) {
                    _this.$state.go('home');
                }, function (error) {
                    console.log("Registration failed:", error);
                });
            };
            return PatientVisitController;
        }());
        Controllers.PatientVisitController = PatientVisitController;
        var LoginController = (function () {
            function LoginController($http, $state) {
                this.$http = $http;
                this.$state = $state;
            }
            LoginController.prototype.login = function () {
                var _this = this;
                console.log("loging in...", this.user);
                this.$http.post('/users/login', this.user).then(function (response) {
                    var token = response.data;
                    console.log("token is:", token);
                    _this.$state.go('home');
                }, function (error) {
                    console.log("login failed:", error);
                });
            };
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
        var EditUserController = (function () {
            function EditUserController($http, $state, $stateParams) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.$http.get('/users/' + this.$stateParams['id']).then(function (response) {
                    console.log(response);
                    _this.user = response.data;
                });
            }
            EditUserController.prototype.editUser = function () {
                var _this = this;
                console.log("fhtjfjf fgjgfjgfkn dffdjnn");
                this.$http.post('/users/update', this.user).then(function (response) {
                    var token = response.data;
                    console.log("token is:", token);
                    _this.$state.go('home');
                }, function (error) {
                    console.log("login failed:", error);
                });
            };
            return EditUserController;
        }());
        Controllers.EditUserController = EditUserController;
        var AboutController = (function () {
            function AboutController($http, $stateParams, $state) {
                var _this = this;
                this.$http = $http;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.$http.get('/users/' + this.$stateParams['id']).then(function (response) {
                    _this.user = response.data;
                });
            }
            AboutController.prototype.deleteUser = function () {
                var _this = this;
                this.$http.delete('/users/' + this.$stateParams['id']).then(function (response) {
                    _this.$state.go('home');
                });
            };
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
