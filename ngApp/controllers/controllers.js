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
        var doctorsController = (function () {
            function doctorsController($http, $state) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                this.editDoctor = function (id) {
                    console.log("preesdded");
                    this.$state.go('edit', { id: id });
                };
                this.param = "Doctor";
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
        var patientsController = (function () {
            function patientsController($http, $state) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                this.editPatient = function (id) {
                    console.log("preesdded");
                    this.$state.go('edit', { id: id });
                };
                this.param = 'Patient';
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
        var nursesController = (function () {
            function nursesController($http, $state) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
                this.editNurse = function (id) {
                    console.log("preesdded");
                    this.$state.go('edit', { id: id });
                };
                this.param = "Nurse";
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
        var VisitListController = (function () {
            function VisitListController($http, $state, $uibModal) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
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
        var PatientVisitController = (function () {
            function PatientVisitController($http, $state) {
                var _this = this;
                this.$http = $http;
                this.$state = $state;
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
        var RegisterController = (function () {
            function RegisterController($http, $state) {
                this.$http = $http;
                this.$state = $state;
            }
            RegisterController.prototype.register = function () {
                var _this = this;
                console.log("registering...", this.user, " and cpassword is:", this.cpassword);
                if (this.cpassword == this.user.password) {
                    this.$http.post('/users/register', this.user).then(function (response) {
                        _this.$state.go('home');
                    }, function (error) {
                        console.log("Registration failed:", error);
                    });
                }
                else {
                    alert("Passwords Do Not Match");
                }
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
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
