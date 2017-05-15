var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var EditUserController = (function () {
            function EditUserController($http, $state, $stateParams, $rootScope, jwtHelper) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.$rootScope = $rootScope;
                this.jwtHelper = jwtHelper;
                Controllers.getRole(jwtHelper, $state, $rootScope);
                if (this.$stateParams['id']) {
                    this.$http.get('/users/' + this.$stateParams['id']).then(function (response) {
                        console.log(response);
                        _this.user = response.data;
                    });
                }
                else {
                    console.log("No id");
                    this.$http.get('/users/' + $rootScope.id).then(function (response) {
                        console.log(response);
                        _this.user = response.data;
                    });
                }
            }
            EditUserController.prototype.editUser = function () {
                var _this = this;
                console.log("fhtjfjf fgjgfjgfkn dffdjnn");
                this.$http.post('/users/update', this.user).then(function (response) {
                    _this.user = response.data;
                    _this.$state.go('home');
                }, function (error) {
                    console.log("edit failed:", error);
                });
            };
            return EditUserController;
        }());
        Controllers.EditUserController = EditUserController;
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
