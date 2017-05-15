var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var nursesController = (function () {
            function nursesController($http, $state, jwtHelper, $rootScope) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                this.jwtHelper = jwtHelper;
                this.$rootScope = $rootScope;
                this.editNurse = function (id) {
                    console.log("preesdded");
                    this.$state.go('edit', { id: id });
                };
                this.param = "Nurse";
                console.log(Controllers.getRole(jwtHelper, $state, $rootScope));
                this.$http.get('users/by_role/' + this.param).then(function (response) {
                    console.log(response);
                    _this.nurses = response.data;
                }, function (err) {
                    console.log(err.data);
                });
            }
            return nursesController;
        }());
        Controllers.nursesController = nursesController;
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
