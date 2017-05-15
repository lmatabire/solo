var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var doctorsController = (function () {
            function doctorsController($http, $state, jwtHelper, $rootScope) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                this.jwtHelper = jwtHelper;
                this.$rootScope = $rootScope;
                this.editDoctor = function (id) {
                    console.log("preesdded");
                    this.$state.go('edit', { id: id });
                };
                this.param = "Doctor";
                console.log(Controllers.getRole(jwtHelper, $state, $rootScope));
                this.$http.get('users/by_role/' + this.param).then(function (response) {
                    console.log(response);
                    _this.doctors = response.data;
                }, function (err) {
                    console.log(err.data);
                });
            }
            return doctorsController;
        }());
        Controllers.doctorsController = doctorsController;
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
