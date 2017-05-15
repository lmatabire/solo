var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
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
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
