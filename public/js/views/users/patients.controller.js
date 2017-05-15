var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var patientsController = (function () {
            function patientsController($http, $state, jwtHelper, $rootScope) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                this.jwtHelper = jwtHelper;
                this.$rootScope = $rootScope;
                this.editPatient = function (id) {
                    console.log("preesdded");
                    this.$state.go('edit', { id: id });
                };
                this.param = 'Patient';
                console.log(Controllers.getRole(jwtHelper, $state, $rootScope));
                this.$http.get('users/by_role/' + this.param).then(function (response) {
                    console.log(response);
                    _this.patients = response.data;
                }, function (err) {
                    console.log(err.data);
                });
            }
            return patientsController;
        }());
        Controllers.patientsController = patientsController;
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
