var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var PatientVisitController = (function () {
            function PatientVisitController($http, $state, jwtHelper, $rootScope) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                this.jwtHelper = jwtHelper;
                this.$rootScope = $rootScope;
                Controllers.getRole(jwtHelper, $state, $rootScope);
                this.$http.get('/users').then(function (response) {
                    _this.users = response.data;
                });
                this.$http.get('/users/by_role/Doctor').then(function (response) {
                    _this.doctors = response.data;
                });
            }
            PatientVisitController.prototype.createVisit = function () {
                var _this = this;
                console.log("Saving...", this.patientVisit);
                this.$http.post('/appointments/create', this.patientVisit).then(function (response) {
                    _this.$state.go('patientVisits');
                }, function (error) {
                    console.log("Registration failed:", error);
                });
            };
            return PatientVisitController;
        }());
        Controllers.PatientVisitController = PatientVisitController;
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
