var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var VisitListController = (function () {
            function VisitListController($http, $state, jwtHelper, $rootScope, $uibModal) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                this.jwtHelper = jwtHelper;
                this.$rootScope = $rootScope;
                this.$uibModal = $uibModal;
                this.open = function (visit) {
                    this.$uibModal.open({
                        animation: true,
                        ariaLabelledBy: 'modal-title-top',
                        ariaDescribedBy: 'modal-body-top',
                        templateUrl: 'ngApp/views/edit-visit.html',
                        size: 'lg',
                        controller: function ($scope, $http) {
                            $scope.visit = visit;
                            $scope.update = function () {
                                var _this = this;
                                console.log("Saving...", this.visit);
                                $http.post('/appointments/update', this.visit).then(function (response) {
                                    _this.$state.go('patientVisits');
                                }, function (error) {
                                    console.log("Update failed:", error);
                                });
                            };
                        }
                    });
                };
                Controllers.getRole(jwtHelper, $state, $rootScope);
                this.$http.get('/appointments/').then(function (response) {
                    console.log(response);
                    _this.patientVisits = response.data;
                }, function (err) {
                    console.log(err.data);
                });
            }
            return VisitListController;
        }());
        Controllers.VisitListController = VisitListController;
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
