var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
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
